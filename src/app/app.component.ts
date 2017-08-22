import { ODataResponse } from './odata/odata-response/odata-response';
import { ODataService } from './odata/odata-service/odata.service';
import { ODataQuery } from './odata/odata-query/odata-query';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ODataQueryBatch } from './odata/odata-query/odata-query-batch';

class Example {
  public title: string;
  public query: string;
  public code: string;
  public response: string;
  public odataQuery: ODataQuery;
}

const SERVICE_ROOT = 'https://services.odata.org/v4/TripPinServiceRW';

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
    //
    let example: Example = new Example();
    this.examples.push(example);
    example.title = 'Get service document';
    example.query = SERVICE_ROOT;
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
    example.odataQuery.get().subscribe((odataResponse: ODataResponse) => {
      example.response = odataResponse.toString();
    });`;
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
    //
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = SERVICE_ROOT + '/People';
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People');
    example.odataQuery.get().subscribe((odataResponse: ODataResponse) => {
      example.response = odataResponse.toString();
    });`;
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People');
    //
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
