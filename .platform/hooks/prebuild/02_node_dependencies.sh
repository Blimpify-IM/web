#!/bin/bash
# Installera beroenden för Node.js 22 på Amazon Linux 2023

# Skriv ut information om miljön
echo "===== ENVIRONMENT INFO ====="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"
echo "============================"

# Installera beroenden
echo "Installing dependencies..."
npm ci

# Rensa npm cache för att undvika problem
echo "Cleaning npm cache..."
npm cache clean --force

echo "Prebuild dependencies setup completed successfully" 