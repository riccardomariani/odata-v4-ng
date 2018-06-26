# uninstall globally cli
sudo npm uninstall -g angular-cli
sudo npm uninstall -g @angular/cli

# uninstall locally cli
npm uninstall --save-dev angular-cli
npm uninstall --save-dev @angular-cli

# verify cache
npm cache verify

# clean 
# use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
rm -rf package-lock.json node_modules dist 

# install globally cli
sudo npm install -g @angular/cli

# install locally cli
npm install --save-dev @angular/cli

# update cli
ng update @angular/cli

# update angular
ng update @angular/core

# install all node modules
npm install

# update all node modules
npm update