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
const CODE_EXECUTION = `example.odataQuery.get().subscribe((odataResponse: ODataResponse) => {
  example.response = odataResponse.toString();
});`;

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
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).metadata();
    ${CODE_EXECUTION}`;
    // ENTITY SET
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = SERVICE_ROOT + '/People';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People');
${CODE_EXECUTION}`;
    // ENTITY
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity';
    example.query = SERVICE_ROOT + '/People(\'russellwhyte\')';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People').entityKey('\'russellwhyte\'');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People').entityKey('russellwhyte');
${CODE_EXECUTION}`;
    // SINGLETON
    example = new Example();
    this.examples.push(example);
    example.title = 'Get singleton';
    example.query = SERVICE_ROOT + '/Me';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).singleton('Me');
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).singleton('Me');
${CODE_EXECUTION}`;
  }

  ngOnDestroy() {
    if (this.subscr) {
      this.subscr.unsubscribe();
    }
  }

  execute(example: Example): void {
    example.odataQuery.get().subscribe((odataResponse: ODataResponse) => {
      example.response = odataResponse.toString();
    });
  }
}
