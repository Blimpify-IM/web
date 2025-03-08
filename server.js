const next = require('next');
const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

// Skapa loggar-mapp om den inte finns
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  try {
    fs.mkdirSync(logsDir);
    console.log(`Created logs directory at ${logsDir}`);
  } catch (err) {
    console.error(`Error creating logs directory: ${err.message}`);
  }
}

// Skapa loggfiler
const nextjsLogStream = fs.createWriteStream(path.join(logsDir, 'nextjs.log'), { flags: 'a' });
const errorLogStream = fs.createWriteStream(path.join(logsDir, 'error.log'), { flags: 'a' });

// Anpassad loggfunktion
const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  nextjsLogStream.write(logMessage);
};

// Anpassad fellogfunktion
const logError = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ERROR: ${message}\n`;
  console.error(message);
  errorLogStream.write(logMessage);
};

log(`Starting Next.js in ${dev ? 'development' : 'production'} mode`);
log(`Server will listen on port ${port}`);
log(`Node version: ${process.version}`);
log(`Current directory: ${process.cwd()}`);

// Kontrollera om .next-mappen finns
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  log(`.next directory exists at ${nextDir}`);
  
  // Kontrollera innehållet i .next-mappen
  try {
    const nextFiles = fs.readdirSync(nextDir);
    log(`.next directory contains: ${nextFiles.join(', ')}`);
  } catch (err) {
    logError(`Error reading .next directory: ${err.message}`);
  }
} else {
  logError(`ERROR: .next directory does not exist at ${nextDir}`);
  logError('This may indicate that the build process failed.');
}

// Läs in next.config.js för att få konfigurationen
let nextConfig = {};
try {
  const configPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(configPath)) {
    nextConfig = require(configPath);
    log(`Loaded Next.js config: ${JSON.stringify(nextConfig)}`);
  }
} catch (err) {
  logError(`Error loading Next.js config: ${err.message}`);
}

// Skapa Next.js-applikationen med mer detaljerad felhantering
const app = next({ 
  dev,
  dir: process.cwd(),
  conf: nextConfig
});

// Hantera förfrågningar
const handle = app.getRequestHandler();

// Förbered Next.js-applikationen
app.prepare()
  .then(() => {
    log('Next.js app prepared');
    const server = express();

    // Använd helmet för säkerhet med anpassade inställningar för Next.js
    server.use(helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }));
    
    // Använd komprimering för alla svar
    server.use(compression());
    
    // Loggning av förfrågningar
    server.use((req, res, next) => {
      const start = Date.now();
      res.on('finish', () => {
        const duration = Date.now() - start;
        log(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
      });
      next();
    });
    
    // Hantera statiska filer
    server.use(express.static(path.join(__dirname, 'public')));
    
    // Hantera statiska filer från .next/static
    server.use('/_next/static', express.static(path.join(__dirname, '.next/static'), {
      maxAge: '30d',
      immutable: true
    }));

    // Hälsokontroll för AWS
    server.get('/health', (req, res) => {
      res.status(200).send('OK');
    });

    // Detaljerad hälsokontroll
    server.get('/health/detailed', (req, res) => {
      const health = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
        nodeVersion: process.version,
        nextDir: fs.existsSync(nextDir)
      };
      
      res.status(200).json(health);
    });

    // Lägg till en testroute
    server.get('/api/test', (req, res) => {
      res.status(200).json({ message: 'API fungerar!' });
    });

    // Lägg till felhantering
    server.use((err, req, res, next) => {
      logError('Server error:');
      logError(err);
      
      // Logga mer detaljerad information om felet
      logError(JSON.stringify({
        message: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method
      }));
      
      res.status(500).send('Something went wrong!');
    });

    // Hantera alla andra förfrågningar med Next.js
    server.all('*', (req, res) => {
      log(`Handling request: ${req.method} ${req.url}`);
      return handle(req, res);
    });

    // Starta servern
    server.listen(port, (err) => {
      if (err) {
        logError(`Error starting server: ${err}`);
        throw err;
      }
      log(`> Server ready on port ${port}`);
    });
  })
  .catch((err) => {
    logError('Error starting server:');
    logError(err);
    process.exit(1);
}); 
