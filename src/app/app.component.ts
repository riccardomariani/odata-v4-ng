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
  public subscr: Subscription;
}

const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';

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
    //
    let example: Example = new Example();
    this.examples.push(example);
    example.title = 'Get service document';
    example.query = SERVICE_ROOT;
    example.code = `new ODataQuery(this.odataService, SERVICE_ROOT)
    .get().subscribe((odataResponse: ODataResponse) => {
      this.examples[0].response = odataResponse.toString();
    });`;
    example.subscr = new ODataQuery(this.odataService, SERVICE_ROOT)
      .get().subscribe((odataResponse: ODataResponse) => {
        this.examples[0].response = odataResponse.toString();
      });
    //
    example = new Example();
    this.examples.push(example);
    example.title = 'Get entity set';
    example.query = 'http://services.odata.org/v4/TripPinServiceRW/People';
    example.code = `new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People')
    .get().subscribe((odataResponse: ODataResponse) => {
      this.examples[1].response = odataResponse.toString();
    });`;
    example.subscr = new ODataQuery(this.odataService, SERVICE_ROOT).entitySet('People')
      .get().subscribe((odataResponse: ODataResponse) => {
        this.examples[1].response = odataResponse.toString();
      });
    //
  }

  ngOnDestroy() {
    for (const example of this.examples) {
      example.subscr.unsubscribe();
    }
  }
}
