import { Component, OnInit } from '@angular/core';
import { ODataQuery, ODataService } from 'odata-v4-ng';
import { BasicReadComponent, EXECUTE_GET } from '../basic-read/basic-read.component';
import { ExampleData, SERVICE_ROOT } from '../example/example-data';

@Component({
  selector: 'ov4-adv-read',
  templateUrl: '../example/example.component.html'
})
export class AdvReadComponent extends BasicReadComponent implements OnInit {
  constructor(protected odataService: ODataService) { super(odataService); }

  ngOnInit() {
    this.examples = [];
    // SINGLETON
    let example: ExampleData = new ExampleData();
    this.examples.push(example);
    example.title = 'Get singleton';
    example.query = SERVICE_ROOT + '/Me';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .singleton('Me');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .singleton('Me');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SINGLETON PROPERTY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get singleton property';
    example.query = SERVICE_ROOT + '/Me/AddressInfo';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .singleton('Me')
      .property('AddressInfo');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .singleton('Me')
    .property('AddressInfo');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // DERIVED ENTITYSET
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get derived entity set';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1003)
      .navigationProperty('PlanItems')
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'')
    .navigationProperty('Trips')
    .entityKey(1003)
    .navigationProperty('PlanItems')
    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // DERIVED ENTITY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get derived entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1003)/PlanItems(21)/Microsoft.OData.SampleService.Models.TripPin.Flight';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1003)
      .navigationProperty('PlanItems')
      .entityKey(21)
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'')
    .navigationProperty('Trips')
    .entityKey(1003)
    .navigationProperty('PlanItems')
    .entityKey(21)
    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER DERIVED ENTITIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get derived entities filtered';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1003)/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight?$filter=FlightNumber eq \'FM1930\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1003)
      .navigationProperty('PlanItems')
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
      .filter('FlightNumber eq \'FM1930\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'')
    .navigationProperty('Trips')
    .entityKey(1003)
    .navigationProperty('PlanItems')
    .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
    .filter('FlightNumber eq \\\'FM1930\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
  }
}
