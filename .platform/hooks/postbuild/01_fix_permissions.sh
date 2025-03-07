#!/bin/bash
# Fixa behörigheter efter byggprocessen

# Skriv ut information om byggresultatet
echo "Build completed, fixing permissions..."

# Säkerställ att .next-mappen har rätt behörigheter
cd /var/app/staging
chmod -R 755 .next

# Kontrollera att .next-mappen skapades korrekt
if [ -d ".next" ]; then
  echo ".next directory exists and has the following files:"
  ls -la .next
else
  echo "ERROR: .next directory does not exist!"
  exit 1
fi

echo "Postbuild fixes completed successfully" 