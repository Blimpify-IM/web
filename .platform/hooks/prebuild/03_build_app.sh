#!/bin/bash
# Bygg Next.js-applikationen

echo "===== BUILDING NEXT.JS APPLICATION ====="
echo "Current directory: $(pwd)"

# Sätt NODE_ENV till production för byggprocessen
export NODE_ENV=production

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
  else
    echo "ERROR: .next directory does not exist!"
    exit 1
  fi
else
  echo "ERROR: Build failed with exit code $?"
  exit 1
fi

echo "Build process completed successfully" 