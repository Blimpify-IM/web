#!/bin/bash
# Installera beroenden för Node.js 22 på Amazon Linux 2023

# Navigera till web-projektet
echo "Navigating to web project directory..."
cd /var/app/staging
echo "Current directory: $(pwd)"

# Skriv ut information om miljön
echo "===== ENVIRONMENT INFO ====="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"
echo "OS: $(cat /etc/os-release | grep PRETTY_NAME)"
echo "============================"

# Kontrollera om package.json finns
if [ ! -f "package.json" ]; then
  echo "ERROR: package.json not found!"
  exit 1
fi

# Installera beroenden
echo "Installing dependencies..."
npm ci --prefer-offline --no-audit

# Kontrollera om installationen lyckades
if [ $? -eq 0 ]; then
  echo "Dependencies installed successfully!"
else
  echo "ERROR: Failed to install dependencies. Retrying with npm install..."
  npm install --prefer-offline --no-audit
  
  if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies with npm install as well."
    exit 1
  fi
fi

# Rensa npm cache för att undvika problem
echo "Cleaning npm cache..."
npm cache clean --force

echo "Prebuild dependencies setup completed successfully" 