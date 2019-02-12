import { Component, OnInit } from '@angular/core';
import { ODataQuery, ODataResponse, ODataService } from 'odata-v4-ng';
import { ExampleData, SERVICE_ROOT } from '../example/example-data';
import { ExampleComponent } from '../example/example.component';

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
const EXECUTE_DELETE_ENTITY_ETAG = `example.subscr = example.odataQuery.delete('W/"08D15F3DD9A61539"').subscribe(
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
const EXECUTE_UPDATE_ENTITY_ETAG = `example.subscr = example.odataQuery.patch({
  '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',
  'FirstName' : 'CLYDE'
}, 'W/"08D15F3DD9126D84"').subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
  );`;
const EXECUTE_CREATE_RELATIONSHIP = `example.subscr = example.odataQuery.post({
  '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('People').entityKey('\\\'vincentcalabrese\\\'').toString()
}).subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
  );`;
const EXECUTE_CHANGE_RELATIONSHIP = `example.subscr = example.odataQuery.put({
  '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('Airlines').entityKey('\\\'FM\\\'').toString()
}).subscribe(
  (odataResponse: ODataResponse) => {
    example.response = odataResponse.toString();
  },
  (error: string) => {
    example.response = error;
  }
  );`;
const EXECUTE_BOUND_ACTION = `example.subscr = example.odataQuery.post({
    'userName': 'scottketchum',
    'tripId': 1001
  }).subscribe(
    (odataResponse: ODataResponse) => {
      example.response = odataResponse.toString();
    },
    (error: string) => {
      example.response = error;
    }
    );`;

@Component({
  selector: 'ov4-basic-write',
  templateUrl: '../example/example.component.html'
})
export class BasicWriteComponent extends ExampleComponent implements OnInit {
  constructor(protected odataService: ODataService) {
    super(odataService);
    this.executeEnabled = false;
  }

  ngOnInit() {
    this.examples = [];
    // CREATE ENTITY
    let example: ExampleData = new ExampleData();
    this.examples.push(example);
    example.title = 'Create entity';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People');
  ${EXECUTE_CREATE_ENTITY}`;
    example.func = this.executeCreateEntity;
    // DELETE ENTITY
    example = new ExampleData();
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
    example.func = this.executeDeleteEntity;
    // UPDATE ENTITY
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Update entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People').
      entityKey('\'russellwhyte\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People').
      entityKey('\\\'russellwhyte\\\'');
  ${EXECUTE_UPDATE_ENTITY}`;
    example.func = this.executeUpdateEntity;
    // CREATE RELATIONSHIP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Create a relationship between entities';
    example.query = SERVICE_ROOT + '/People(\'scottketchum\')/Friends/$ref';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'scottketchum\'')
      .navigationProperty('Friends')
      .ref();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\\\'scottketchum\\\'')
      .navigationProperty('Friends')
      .ref();
  ${EXECUTE_CREATE_RELATIONSHIP}`;
    example.func = this.executeCreateRelationship;
    // CHANGE RELATIONSHIP
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Change relationship between entities';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Trips(1001)/PlanItems(11)/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline/$ref';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .navigationProperty('Trips')
      .entityKey(1001)
      .navigationProperty('PlanItems')
      .entityKey(11)
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
      .navigationProperty('Airline')
      .ref();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\\\'russellwhyte\\\'')
      .navigationProperty('Trips')
      .entityKey(1001)
      .navigationProperty('PlanItems')
      .entityKey(11)
      .typeName('Microsoft.OData.SampleService.Models.TripPin.Flight')
      .navigationProperty('Airline')
      .ref();
  ${EXECUTE_CHANGE_RELATIONSHIP}`;
    example.func = this.executeChangeRelationship;
    // BOUND ACTION
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Bound action';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')/Microsoft.OData.SampleService.Models.TripPin.ShareTrip';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'russellwhyte\'')
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\\\'russellwhyte\\\'')
      .actionCall('Microsoft.OData.SampleService.Models.TripPin.ShareTrip');
  ${EXECUTE_BOUND_ACTION}`;
    example.func = this.executeBoundAction;
    // UPDATE ENTITY ETAG
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Update entity with ETag';
    example.query = SERVICE_ROOT + '/People(\'clydeguess\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'clydeguess\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\\\'clydeguess\\\'');
  ${EXECUTE_UPDATE_ENTITY_ETAG}`;
    example.func = this.executeUpdateEntityETag;
    // DELETE ENTITY ETAG
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Delete entity with ETag';
    example.query = SERVICE_ROOT + '/People(\'vincentcalabrese\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\'vincentcalabrese\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .entitySet('People')
      .entityKey('\\\'vincentcalabrese\\\'');
  ${EXECUTE_DELETE_ENTITY_ETAG}`;
    example.func = this.executeDeleteEntityETag;
  }

  executeCreateEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      UserName: 'teresa',
      FirstName: 'Teresa',
      LastName: 'Gilbert',
      Gender: 'Female',
      Emails: ['teresa@example.com', 'teresa@contoso.com'],
      AddressInfo: [
        {
          Address: '1 Suffolk Ln.',
          City:
          {
            CountryRegion: 'United States',
            Name: 'Boise',
            Region: 'ID'
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

  executeDeleteEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.delete().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeDeleteEntityETag(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.delete('W/"08D15F3DD9A61539"').subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeUpdateEntity(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.patch({
      '@odata.type': 'Microsoft.OData.SampleService.Models.TripPin.Person',
      Emails: ['Russell@example.com', 'Russell@contoso.com', 'newRussell@contoso.com']
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeUpdateEntityETag(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.patch({
      '@odata.type': '#Microsoft.OData.SampleService.Models.TripPin.Person',
      FirstName: 'CLYDE'
    }, 'W/"08D15F3DD9126D84"').subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeCreateRelationship(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('People').entityKey('\'vincentcalabrese\'').toString()
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeChangeRelationship(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.put({
      '@odata.id': new ODataQuery(odataService, SERVICE_ROOT).entitySet('Airlines').entityKey('\'FM\'').toString()
    }).subscribe(
      (odataResponse: ODataResponse) => {
        example.response = odataResponse.toString();
      },
      (error: string) => {
        example.response = error;
      }
    );
  }

  executeBoundAction(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.post({
      userName: 'scottketchum',
      tripId: 1001
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
