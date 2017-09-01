import { ODataResponse } from './odata/odata-response/odata-response';
import { ODataService } from './odata/odata-service/odata.service';
import { ODataQuery } from './odata/odata-query/odata-query';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

class Example {
  public title: string;
  public query: string;
  public odataQuery: ODataQuery;
  public code: string;
  public response: string;
  public func: Function;
  public subscr: Subscription;
}

const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';
const EXECUTE_GET = `example.odataQuery.get().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
);`;
const EXECUTE_CREATE_ENTITY = `example.subscr = example.odataQuery.post({
  '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
  'UserName': 'teresa',
  'FirstName': 'Teresa',
  'LastName': 'Gilbert',
  'Gender': 'Female',
  'Emails': ['teresa@example.com', 'teresa@contoso.com'],
  'AddressInfo': [
    {
      'Address': '1 Suffolk Ln.',
      'City':
      {
        'CountryRegion': 'United States',
        'Name': 'Boise',
        'Region': 'ID'
      }
    }]
}).subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
  );`;
const EXECUTE_DELETE_ENTITY = `example.subscr = example.odataQuery.delete().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
);`;
const EXECUTE_UPDATE_ENTITY = `example.subscr = example.odataQuery.patch({
  '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
  'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
}).subscribe(
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SERVICE METADATA
    example = new Example();
    this.examples.push(example);
    example.title = 'Get service metadata';
    example.query = SERVICE_ROOT + '/$metadata';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .metadata();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // ENTITY SET
    example = new Example();
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // COMPLEX TYPE PROPERTY
    example = new Example();
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // FILTERED EXPAND
    example = new Example();
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // TOP
    example = new Example();
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
    example = new Example();
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // CREATE ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Create entity';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People');
${EXECUTE_CREATE_ENTITY}`;
    // example.func = this.executeCreateEntity;
    // DELETE ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Delete entity';
    example.query = SERVICE_ROOT + '/People(\'vincentcalabrese\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'vincentcalabrese\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People')
    .entityKey('\\\'vincentcalabrese\\\'');
${EXECUTE_DELETE_ENTITY}`;
    // example.func = this.executeDeleteEntity;
    // UPDATE ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Update entity';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .entitySet('People');
${EXECUTE_UPDATE_ENTITY}`;
    // example.func = this.executeUpdateEntity;
    // SINGLETON
    example = new Example();
    this.examples.push(example);
    example.title = 'Get singleton';
    example.query = SERVICE_ROOT + '/Me';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .singleton('Me');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .singleton('Me');
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
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
${EXECUTE_GET}`;
    example.func = this.executeGet;
  }

  ngOnDestroy() {
    if (this.examples) {
      for (const example of this.examples) {
        if (example.subscr) {
          example.subscr.unsubscribe();
        }
      }
    }
  }

  execute(example: Example): void {
    if (example.func) {
      example.func(example);
    }
  }

  executeGet(example: Example): void {
    example.subscr = example.odataQuery.get().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeAllGet(): void {
    if (this.examples) {
      for (const example of this.examples) {
        this.executeGet(example);
      }
    }
  }

  executeCreateEntity(example: Example): void {
    example.subscr = example.odataQuery.post({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      'UserName': 'teresa',
      'FirstName': 'Teresa',
      'LastName': 'Gilbert',
      'Gender': 'Female',
      'Emails': ['teresa@example.com', 'teresa@contoso.com'],
      'AddressInfo': [
        {
          'Address': '1 Suffolk Ln.',
          'City':
          {
            'CountryRegion': 'United States',
            'Name': 'Boise',
            'Region': 'ID'
          }
        }]
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }

  executeDeleteEntity(example: Example): void {
    example.subscr = example.odataQuery.delete().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeUpdateEntity(example: Example): void {
    example.subscr = example.odataQuery.patch({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      'Emails': ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
      );
  }
}
