sudo npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli

sudo npm uninstall -g @angular/cli
npm cache clean
sudo npm install -g @angular/cli@latest

rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
npm install --save-dev @angular/cli@latest
npm install