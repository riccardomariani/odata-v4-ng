import { Component, OnInit } from '@angular/core';
import { ODataQuery } from '../../odata/odata-query/odata-query';
import { ODataService } from '../../odata/odata-service/odata.service';
import { ExampleData, SERVICE_ROOT } from '../example/example-data';
import { ExampleComponent } from '../example/example.component';

export const EXECUTE_GET = `example.odataQuery.get().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
);`;

@Component({
  selector: 'ov4-basic-read',
  templateUrl: '../example/example.component.html'
})
export class BasicReadComponent extends ExampleComponent implements OnInit {
  constructor(protected odataService: ODataService) { super(odataService); }

  ngOnInit() {
    this.examples = [];
    // ENTITY SET
    let example: ExampleData = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ENTITY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROPERTY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get property';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Name';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Name');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Name');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // COMPLEX TYPE PROPERTY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get complex type property';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Location/Address';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Location/Address');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Location/Address');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROPERTY RAW VALUE
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get property raw value';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')/Name/$value';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .property('Name')
      .value();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .property('Name')
    .value();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER ENTITIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered entities';
    example.query = SERVICE_ROOT + '/People?$filter=FirstName eq \'Scott\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('FirstName eq \'Scott\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('FirstName eq \\\'Scott\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER COMPLEX TYPES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered complex types';
    example.query = SERVICE_ROOT + '/Airports?$filter=contains(Location/Address, \'San Francisco\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .filter('contains(Location/Address, \'San Francisco\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .filter('contains(Location/Address, \\\'San Francisco\\\')');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTER ENUM PROPERTIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get filtered enum properties';
    example.query = SERVICE_ROOT + '/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\\\'Female\\\'');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // EXPAND
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get expanded entities';
    example.query = SERVICE_ROOT + '/People?$expand=Trips';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTERED EXPAND
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get expanded entities with nested filter';
    example.query = SERVICE_ROOT + '/People?$expand=Trips($filter=Name eq \'Trip in US\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips($filter=Name eq \'Trip in US\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips($filter=Name eq \\\'Trip in US\\\')');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ORDERBY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get ordered entities';
    example.query = SERVICE_ROOT + '/People(\'scottketchum\')/Trips?$orderby=EndsAt desc';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'scottketchum\'')
      .navigationProperty('Trips')
      .orderby('EndsAt desc');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'scottketchum\\\'')
    .navigationProperty('Trips')
    .orderby('EndsAt desc');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // TOP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities using top';
    example.query = SERVICE_ROOT + '/People?$top=2';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .top(2);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .top(2);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SKIP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities using skip';
    example.query = SERVICE_ROOT + '/People?$skip=18';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .skip(18);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .skip(18);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // COUNT
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities count';
    example.query = SERVICE_ROOT + '/People?$count';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .countSegment();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .countSegment();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // PROJECTED ENTITIES
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get projected entities';
    example.query = SERVICE_ROOT + '/Airports?$select=Name, IcaoCode';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .select('Name, IcaoCode');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .select('Name, IcaoCode');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SEARCH
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get entities matching search';
    example.query = SERVICE_ROOT + '/People?$search=Boise';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .search('Boise');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .search('Boise');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // UNBOUND FUNCTION
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Unbound function';
    example.query = SERVICE_ROOT + '/GetNearestAirport(lat = 33, lon = -118)';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .functionCall('GetNearestAirport(lat = 33, lon = -118)');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .functionCall('GetNearestAirport(lat = 33, lon = -118)');
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // BOUND FUNCTION
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Bound function';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'')
    .functionCall('Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()');
${EXECUTE_GET}`;
    example.func = this.executeGet;
  }
}
