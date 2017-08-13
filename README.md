# odata-v4-ng

This project is an OData V4 client typescript library built using the Angular V4 framework. The goal is to create an easy to understand [fluent API](https://www.google.it/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjztKLavNTVAhXDKlAKHbNEA2IQFgg2MAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFluent_interface&usg=AFQjCNHcT-89__Mu2BHtejtaB-dxbg7VNw) for querying, creating, updating and deleting OData resources in Angular.

To install the package use `npm install --save odata-v4-ng`

**Please do NOT use this project in production till version 1.0.0 (end of September).
This project is still in an alpha stage and the API could change consistently.**

## Usage examples

For all examples in this page we are using the publicly available TripPin service [http://services.odata.org/V4/TripPinServiceRW](http://services.odata.org/V4/TripPinServiceRW/). Metadata of this service are here: [http://services.odata.org/V4/TripPinServiceRW/$metadata](http://services.odata.org/V4/TripPinServiceRW/$metadata).

In "app.module.ts" import HttpModule and declare ODataService as a provider.

**Under construction**

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
