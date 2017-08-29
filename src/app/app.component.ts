import { Purpose, QueryOptions } from './odata/query-options/query-options';
import { Expand } from './odata/query-options/expand';
import { ODataResponse } from './odata/odata-response/odata-response';
import { ODataService } from './odata/odata-service/odata.service';
import { ODataQuery } from './odata/odata-query/odata-query';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ODataQueryBatch } from './odata/odata-query/odata-query-batch';

class Example {
  public title: string;
  public query: string;
  public odataQuery: ODataQuery;
  public code: string;
  public response: string;
}

const SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';
const CODE_EXECUTION = `example.odataQuery.get().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
);`;

@Component({
  selector: 'ov4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'odata-v4-ng';
  serviceRoot: string = SERVICE_ROOT;
  examples: Example[];
  subscr: Subscription;

  constructor(private odataService: ODataService) { }

  ngOnInit() {
    this.examples = [];
    // SERVICE DOCUMENT
    let example: Example = new Example();
    this.examples.push(example);
    example.title = 'Get service document';
    example.query = SERVICE_ROOT;
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
${CODE_EXECUTION}`;
    // SERVICE METADATA
    example = new Example();
    this.examples.push(example);
    example.title = 'Get service metadata';
    example.query = SERVICE_ROOT + '/$metadata';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .metadata();
    ${CODE_EXECUTION}`;
    // ENTITY SET
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People');
${CODE_EXECUTION}`;
    // ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'russellwhyte\\\'');
${CODE_EXECUTION}`;
    // PROPERTY
    example = new Example();
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
${CODE_EXECUTION}`;
    // PROPERTY RAW VALUE
    example = new Example();
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
${CODE_EXECUTION}`;
    // FILTER ENTITIES
    example = new Example();
    this.examples.push(example);
    example.title = 'Get filtered entities';
    example.query = SERVICE_ROOT + '/People?$filter=FirstName eq \'Scott\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('FirstName eq \'Scott\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('FirstName eq \\\'Scott\\\'');
${CODE_EXECUTION}`;
    // FILTER COMPLEX TYPES
    example = new Example();
    this.examples.push(example);
    example.title = 'Get filtered complex types';
    example.query = SERVICE_ROOT + '/Airports?$filter=contains(Location/Address, \'San Francisco\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .filter('contains(Location/Address, \'San Francisco\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .filter('contains(Location/Address, \\\'San Francisco\\\')');
${CODE_EXECUTION}`;
    // FILTER ENUM PROPERTIES
    example = new Example();
    this.examples.push(example);
    example.title = 'Get filtered enum properties';
    example.query = SERVICE_ROOT + '/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\'Female\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .filter('Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender\\\'Female\\\'');
${CODE_EXECUTION}`;
    // EXPAND
    example = new Example();
    this.examples.push(example);
    example.title = 'Get expanded entities';
    example.query = SERVICE_ROOT + '/People?$expand=Trips';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips');
${CODE_EXECUTION}`;
    // FILTERED EXPAND
    example = new Example();
    this.examples.push(example);
    example.title = 'Get filtered expanded entities';
    example.query = SERVICE_ROOT + '/People?$expand=Trips($filter=Name eq \'Trip in US\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .expand('Trips($filter=Name eq \'Trip in US\')');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .expand('Trips($filter=Name eq \\\'Trip in US\\\')');
${CODE_EXECUTION}`;
    // ORDERBY
    example = new Example();
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
${CODE_EXECUTION}`;
    // TOP
    example = new Example();
    this.examples.push(example);
    example.title = 'Get top entities';
    example.query = SERVICE_ROOT + '/People?$top=2';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .top(2);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .top(2);
${CODE_EXECUTION}`;
    // SKIP
    example = new Example();
    this.examples.push(example);
    example.title = 'Get skipped entities';
    example.query = SERVICE_ROOT + '/People?$skip=18';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .skip(18);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .skip(18);
${CODE_EXECUTION}`;
    // COUNT
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entities count';
    example.query = SERVICE_ROOT + '/People?$count';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .count();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .count();
${CODE_EXECUTION}`;
    // PROJECTED ENTITIES
    example = new Example();
    this.examples.push(example);
    example.title = 'Get projected entities';
    example.query = SERVICE_ROOT + '/Airports?$select=Name, IcaoCode';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .select('Name, IcaoCode');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .select('Name, IcaoCode');
${CODE_EXECUTION}`;
    // PROJECTED ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Get projected entity';
    example.query = SERVICE_ROOT + '/Airports(\'KSFO\')?$select=Name, IcaoCode';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('Airports')
      .entityKey('\'KSFO\'')
      .select('Name, IcaoCode');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('Airports')
    .entityKey('\\\'KSFO\\\'')
    .select('Name, IcaoCode');
${CODE_EXECUTION}`;
    // SEARCH
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entities matching search';
    example.query = SERVICE_ROOT + '/People?$search=Boise';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .search('Boise');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .search('Boise');
${CODE_EXECUTION}`;
    // SINGLETON
    example = new Example();
    this.examples.push(example);
    example.title = 'Get singleton';
    example.query = SERVICE_ROOT + '/Me';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .singleton('Me');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .singleton('Me');
${CODE_EXECUTION}`;
    // DERIVED ENTITYSET
    example = new Example();
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
${CODE_EXECUTION}`;
    // DERIVED ENTITY
    example = new Example();
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
${CODE_EXECUTION}`;
  }

  ngOnDestroy() {
    if (this.subscr) {
      this.subscr.unsubscribe();
    }
  }

  execute(example: Example): void {
    example.odataQuery.get().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }
}
