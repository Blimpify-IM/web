#!/bin/bash
# Verifiera byggresultatet och säkerställ att allt är korrekt konfigurerat

echo "===== VERIFYING BUILD RESULT ====="
cd /var/app/staging

# Kontrollera att server.js finns
if [ ! -f "server.js" ]; then
  echo "ERROR: server.js does not exist!"
  exit 1
else
  echo "server.js exists"
fi

# Kontrollera att .next-mappen finns och innehåller nödvändiga filer
if [ ! -d ".next" ]; then
  echo "ERROR: .next directory does not exist!"
  exit 1
else
  echo ".next directory exists"
  
  # Kontrollera att server-mappen finns
  if [ ! -d ".next/server" ]; then
    echo "WARNING: .next/server directory does not exist!"
  else
    echo ".next/server directory exists"
  fi
  
  # Kontrollera att static-mappen finns
  if [ ! -d ".next/static" ]; then
    echo "WARNING: .next/static directory does not exist!"
  else
    echo ".next/static directory exists"
  fi
fi

# Kontrollera att node_modules finns
if [ ! -d "node_modules" ]; then
  echo "ERROR: node_modules directory does not exist!"
  exit 1
else
  echo "node_modules directory exists"
  
  # Kontrollera att express finns
  if [ ! -d "node_modules/express" ]; then
    echo "ERROR: express module does not exist!"
    exit 1
  else
    echo "express module exists"
  fi
  
  # Kontrollera att next finns
  if [ ! -d "node_modules/next" ]; then
    echo "ERROR: next module does not exist!"
    exit 1
  else
    echo "next module exists"
  fi
  
  # Kontrollera att compression finns
  if [ ! -d "node_modules/compression" ]; then
    echo "ERROR: compression module does not exist!"
    exit 1
  else
    echo "compression module exists"
  fi
fi

# Skapa en testfil för att verifiera att filsystemet fungerar
echo "Testing file system write permissions..."
touch test_file.txt
if [ $? -eq 0 ]; then
  echo "File system write permissions OK"
  rm test_file.txt
else
  echo "ERROR: Cannot write to file system!"
  exit 1
fi

echo "Build verification completed successfully" 