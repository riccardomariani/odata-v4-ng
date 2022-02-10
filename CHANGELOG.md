# Changelog
## [13.0.0](https://github.com/riccardomariani/odata-v4-ng/compare/v1.3.4...v13.0.0) (2022-02-09)
In version 13 we completely updated all reference npm packages. At the time of the release there were no outdated npm packages and no known security issues in related packages (checked with npm audit).

Main libraries updated to create version 13:
- Angular
- RXjs
- NodeJS
- NPM

Since Angular 13 the Angular Package Format has changed a lot. This update aligns with this new Angular Package Format. Since tslint is no longer supported this update also switches over to eslint. Related code fixes are applied as well. Angular 13 now uses rxjs 7.5.3.

This version was tested with NodeJS 16.x.x and NPM 8.x.x

**BREAKING CHANGE**: Only working with Angular 13+, to support lower versions of Angular use earlier versions of this package.

## [1.3.4](https://github.com/riccardomariani/odata-v4-ng/compare/v1.3.3...v1.3.4) (2020-04-16)
The latest version before eBenefits became the maintainer for this package. Look at Riccardo Mariani's repository for 'odata-v4-ng' version 1.3.4 and before, which was made to work with Angular 9. We've tested this version until Angular 12. Starting Angular 13 you will need '@ebenefits/odata-v4-ng'. 
