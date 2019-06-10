#!/usr/bin/env bash

clear
echo -e '--- update Node.js ---'
sudo npm cache clean -f
npx n 10

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
