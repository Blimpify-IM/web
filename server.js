const next = require('next');
const express = require('express');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

console.log(`Starting Next.js in ${dev ? 'development' : 'production'} mode`);
console.log(`Server will listen on port ${port}`);
console.log(`Node version: ${process.version}`);
console.log(`Current directory: ${process.cwd()}`);

// Kontrollera om .next-mappen finns
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  console.log(`.next directory exists at ${nextDir}`);
} else {
  console.error(`ERROR: .next directory does not exist at ${nextDir}`);
  console.error('This may indicate that the build process failed.');
}

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    console.log('Next.js app prepared');
    const server = express();

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

    // Lägg till felhantering
    server.use((err, req, res, next) => {
      console.error('Server error:', err);
      res.status(500).send('Something went wrong!');
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Server ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error starting server:');
    console.error(err);
    process.exit(1);
}); 
