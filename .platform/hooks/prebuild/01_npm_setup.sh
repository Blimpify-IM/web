#!/bin/bash
# Sätt upp Node.js-miljön för byggprocessen

# Navigera till web-projektet
echo "Navigating to web project directory..."
cd /var/app/staging
echo "Current directory: $(pwd)"

# Skriv ut information om miljön
echo "===== NPM SETUP ====="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"

# Kontrollera om vi har rätt Node.js-version
NODE_VERSION=$(node -v)
echo "Current Node.js version: $NODE_VERSION"

# Säkerställ att vi har rätt behörigheter
chmod -R 755 .

# Uppdatera npm till senaste versionen
echo "Updating npm to latest version..."
npm install -g npm@latest
echo "Updated npm version: $(npm -v)"

# Konfigurera npm för att hantera beroenden korrekt
echo "Configuring npm..."
npm config set unsafe-perm true
npm config set legacy-peer-deps true

# Installera dev-dependencies
echo "Installing dependencies with npm ci..."
npm ci --prefer-offline

# Rensa npm cache för att undvika problem
echo "Cleaning npm cache..."
npm cache clean --force

echo "Prebuild setup completed successfully" 