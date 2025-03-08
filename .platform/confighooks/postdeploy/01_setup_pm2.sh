#!/bin/bash
# Konfigurera PM2 för att hantera Node.js-processen

echo "===== SETTING UP PM2 ====="
cd /var/app/current

# Installera PM2 globalt om det inte redan finns
if ! command -v pm2 &> /dev/null; then
  echo "Installing PM2 globally..."
  npm install -g pm2
else
  echo "PM2 is already installed"
fi

# Skapa PM2-konfigurationsfil
echo "Creating PM2 configuration..."
cat > ecosystem.config.js << 'EOL'
module.exports = {
  apps: [{
    name: "nextjs-app",
    script: "server.js",
    instances: "max",
    exec_mode: "cluster",
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "production",
      PORT: 8080
    },
    error_file: "./logs/pm2-error.log",
    out_file: "./logs/pm2-out.log",
    merge_logs: true,
    log_date_format: "YYYY-MM-DD HH:mm:ss Z"
  }]
}
EOL

# Stoppa eventuella tidigare instanser
echo "Stopping any previous PM2 instances..."
pm2 stop all || true
pm2 delete all || true

# Starta applikationen med PM2
echo "Starting application with PM2..."
pm2 start ecosystem.config.js

# Spara PM2-konfigurationen för att överleva omstarter
echo "Saving PM2 configuration..."
pm2 save

# Konfigurera PM2 för att starta vid systemstart
echo "Setting up PM2 to start on system boot..."
pm2 startup || true

echo "PM2 setup completed successfully" 