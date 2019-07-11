#!/usr/bin/env bash

clear
echo -e '--- update Node.js and npm ---'
sudo npm cache clean -f
npx n 10
sudo npm install -g npm

echo -e '\n'
echo -e '--- uninstall global @angular/cli ---'
sudo npm uninstall -g angular-cli
sudo npm uninstall -g @angular/cli

echo -e '\n'
echo -e '--- verify cache ---'
sudo npm cache verify

echo -e '\n'
echo -e '--- install global @angular/cli ---'
sudo npm install -g @angular/cli
