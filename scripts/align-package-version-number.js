var fs = require('fs');
var path = require('path');

const distPackageLocation = path.join('dist', 'odata-v4-ng', 'package.json');
const projectPackageLocation = path.join('projects', 'odata-v4-ng', 'package.json');
const packageLocation = path.join('package.json');

// Get the version number from the project package.json
const packageJsonContent = JSON.parse(fs.readFileSync(packageLocation, {encoding: 'utf8'}));
const determinedVersion = packageJsonContent['version'];

// Get the version number from the project package.json
const projectPackageJsonContent = JSON.parse(fs.readFileSync(projectPackageLocation, {encoding: 'utf8'}));
projectPackageJsonContent['version'] = determinedVersion;
const projectFileToWrite = JSON.stringify(projectPackageJsonContent, null, 2);
fs.writeFileSync(projectPackageLocation, projectFileToWrite, {encoding: 'utf8'});

// Update dist package.json version numbers
const distPackageJsonContent = JSON.parse(fs.readFileSync(distPackageLocation, {encoding: 'utf8'}));
distPackageJsonContent['version'] = determinedVersion;
const distFileToWrite = JSON.stringify(distPackageJsonContent, null, 2);
fs.writeFileSync(distPackageLocation, distFileToWrite, {encoding: 'utf8'});
