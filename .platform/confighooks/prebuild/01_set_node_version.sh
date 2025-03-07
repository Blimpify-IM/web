#!/bin/bash
# Ange Node.js-version

# Installera nvm om det inte redan finns
if [ ! -d "$HOME/.nvm" ]; then
  echo "Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Använd Node.js 18 om det finns en .nvmrc-fil
if [ -f "/var/app/staging/.nvmrc" ]; then
  echo "Found .nvmrc file, using specified Node.js version"
  nvm install
  nvm use
else
  echo "No .nvmrc file found, using Node.js 18"
  nvm install 18
  nvm use 18
fi

# Skriv ut Node.js-versionen
echo "Using Node.js version: $(node -v)"
echo "Using npm version: $(npm -v)" 