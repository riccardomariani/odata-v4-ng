clear
echo -e '--- uninstall global @angular/cli ---'
sudo npm uninstall -g angular-cli
sudo npm uninstall -g @angular/cli

echo -e '\n\n'
echo -e '--- verify cache ---'
npm cache verify

echo -e '\n\n'
echo -e '--- install global @angular/cli ---'
sudo npm install -g @angular/cli

echo -e '\n\n'
echo -e '--- clean package-lock.json, node_modules, dist ---'
rm -r -f package-lock.json node_modules dist

echo -e '\n\n'
echo -e '--- update @angular/cli ---'
ng update @angular/cli

echo -e '\n\n'
echo -e '--- update @angular/core ---'
ng update @angular/core

echo -e '\n\n'
echo -e '--- update node modules ---'
npm update