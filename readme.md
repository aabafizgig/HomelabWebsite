## WinSCP (Windows) or FileZilla (cross-platform)

Connect to your server using:

Host: your-server-ip

Username: ubuntuserver

Password: your-password

Protocol: SFTP (port 22)

# In WinSCP, upload to /home/ubuntuserver/ (no sudo needed).

Then run in SSH:

bash
sudo mv /home/ubuntuserver/HomelabWebsite /var/www/html/
sudo chown -R www-data:www-data /var/www/html/HomelabWebsite



## Fix File Permissions & Ownership:
# Set correct ownership (nginx user:group)
sudo chown -R www-data:www-data /var/www/html/HomelabWebsite

# Set secure permissions:
# Folders = 755 (read+execute for others)
# Files = 644 (read-only for others)
sudo find /var/www/html/HomelabWebsite -type d -exec chmod 755 {} \;
sudo find /var/www/html/HomelabWebsite -type f -exec chmod 644 {} \;



## SSH into the server
ssh ubuntuserver@192.168.0.138

## to re-upload files use thiss command:
scp -r "C:\Users\forre\Documents\Journey\HomelabWebsite" ubuntuserver@192.168.0.138:~
## When Going Live:

Just install Certbot and run:
"
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com   "

## Security Maintenance:

Update the TLS configuration annually

Review CSP headers when adding new services

Monitor logs at /var/log/nginx/secure-*.log

## The only changes needed when going live will be:

Setting your real domain in server_name

Running Certbot (which will auto-update the SSL paths)