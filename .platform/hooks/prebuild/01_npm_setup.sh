#!/bin/bash
# Sätt upp Node.js-miljön för byggprocessen

# Skriv ut information om miljön
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Kontrollera om vi har rätt Node.js-version
NODE_VERSION=$(node -v)
echo "Current Node.js version: $NODE_VERSION"

# Säkerställ att vi har rätt behörigheter
cd /var/app/staging
chmod -R 755 .

# Installera dev-dependencies
echo "Installing dependencies with npm ci..."
npm ci

# Rensa npm cache för att undvika problem
echo "Cleaning npm cache..."
npm cache clean --force

echo "Prebuild setup completed successfully" 