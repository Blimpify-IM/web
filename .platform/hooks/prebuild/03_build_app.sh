#!/bin/bash
# Bygg Next.js-applikationen

# Navigera till web-projektet
echo "Navigating to web project directory..."
cd /var/app/staging
echo "Current directory: $(pwd)"

echo "===== BUILDING NEXT.JS APPLICATION ====="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Sätt NODE_ENV till production för byggprocessen
export NODE_ENV=production

# Rensa tidigare byggen om de finns
if [ -d ".next" ]; then
  echo "Removing previous .next directory..."
  rm -rf .next
fi

# Bygg applikationen
echo "Running npm run build..."
npm run build

# Kontrollera om byggprocessen lyckades
if [ $? -eq 0 ]; then
  echo "Build completed successfully!"
  
  # Kontrollera om .next-mappen skapades
  if [ -d ".next" ]; then
    echo ".next directory exists with the following files:"
    ls -la .next
    
    # Kontrollera server-mappen
    if [ -d ".next/server" ]; then
      echo ".next/server directory exists with the following files:"
      ls -la .next/server
    else
      echo "WARNING: .next/server directory does not exist!"
    fi
    
    # Kontrollera static-mappen
    if [ -d ".next/static" ]; then
      echo ".next/static directory exists with the following files:"
      ls -la .next/static
    else
      echo "WARNING: .next/static directory does not exist!"
    fi
  else
    echo "ERROR: .next directory does not exist!"
    exit 1
  fi
  
  # Optimera för produktion
  echo "Optimizing build for production..."
  npm prune --production
else
  echo "ERROR: Build failed with exit code $?"
  exit 1
fi

echo "Build process completed successfully" 