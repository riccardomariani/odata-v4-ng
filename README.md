# ATTENTION!

This project is no longer in development and it's only compatible with angular versions < 13.

A new project has been created, as a fork from this project, to be compatible with angular version 13 and possibly any upcoming angular version https://github.com/ebenefits/odata-v4-ng. I'm not the maintainer of the new project. The new project has a different maintainer that I want to publicly thank to have kept the project alive. Please take a look at the following issue for additional details about the changes https://github.com/riccardomariani/odata-v4-ng/issues/36.

# odata-v4-ng

This project is a client side OData V4 typescript library for Angular2+. The goal is to create an easy to understand [fluent API](https://www.google.it/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjztKLavNTVAhXDKlAKHbNEA2IQFgg2MAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFluent_interface&usg=AFQjCNHcT-89__Mu2BHtejtaB-dxbg7VNw) for querying, creating, updating and deleting OData resources in Angular2+.

## Install

To install the package use `npm install --save odata-v4-ng`

## Import
```
import { AppComponent } from './app.component';
import { ODataModule } from 'odata-v4-ng';
...

@NgModule({
  declarations: [
    AppComponent
    ...
  ],
  imports: [
    ODataModule
    ...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```

## Usage examples

See [here](https://riccardomariani.github.io/odata-v4-ng).

## Changelog

See [here](https://github.com/riccardomariani/odata-v4-ng/blob/master/CHANGELOG.md).

## Code quality

See [here](https://sonarcloud.io/dashboard?id=odata-v4-ng).
