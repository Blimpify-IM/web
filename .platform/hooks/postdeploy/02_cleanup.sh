#!/bin/bash
# Rensa gamla loggar och temporära filer

echo "===== CLEANING UP OLD LOGS AND TEMP FILES ====="
cd /var/app/current

# Skapa cron-jobb för att rensa gamla loggar
echo "Setting up log rotation cron job..."
cat > /tmp/logrotate_cron << 'EOL'
#!/bin/bash
# Rensa loggar äldre än 7 dagar
find /var/app/current/logs -name "*.log" -type f -mtime +7 -delete
EOL

# Gör skriptet körbart
chmod +x /tmp/logrotate_cron

# Installera cron-jobbet för att köras varje dag kl 02:00
(crontab -l 2>/dev/null || echo "") | grep -v "logrotate_cron" | { cat; echo "0 2 * * * /tmp/logrotate_cron"; } | crontab -

# Rensa eventuella temporära filer
echo "Cleaning up temporary files..."
find /tmp -name "npm-*" -type d -mtime +1 -exec rm -rf {} \; 2>/dev/null || true

echo "Cleanup completed successfully" 