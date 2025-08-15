## USING GITHUB
# Whenever you want to update manually in SSH:
cd /var/www/html
sudo git pull


# edit files in windows then Cron will automatically update the files every 5 minutes or you can pull manually.



## SSH into the server
ssh ubuntuserver@192.168.0.138

## WinSCP 

Connect to your server using:

Host: your-server-ip

Username: ubuntuserver

Password: your-password

Protocol: SFTP (port 22)

# In WinSCP, upload to /home/ubuntuserver/

Then run in SSH:

bash
sudo mv /home/ubuntuserver/HomelabWebsite /var/www/html/
sudo chown -R www-data:www-data /var/www/html/HomelabWebsite



## Fix File Permissions & Ownership:
# Set correct ownership (nginx user:group)
sudo chown -R www-data:www-data /var/www/html/HomelabWebsite

# Set secure permissions:

sudo find /var/www/html/HomelabWebsite -type d -exec chmod 755 {} \;
sudo find /var/www/html/HomelabWebsite -type f -exec chmod 644 {} \;


## to re-upload files via CMD use this command:
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