import { ODataResponse } from './odata/odata-response/odata-response';
import { ODataService } from './odata/odata-service/odata.service';
import { ODataQuery } from './odata/odata-query/odata-query';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

const SERVICE_ROOT = 'http://services.odata.org/v4/TripPinServiceRW';
//
const QUERY_SERVICE_ROOT = SERVICE_ROOT;
const CODE_SERVICE_ROOT = `let odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT);
this.examples[0].subscr = this.odataService.get(odataQuery).subscribe(
  (odataResponse: ODataResponse) => {
    this.examples[0].response = JSON.stringify(odataResponse.getBody(), null, 4);
  }
);`;
//
const QUERY_ENTITY_SET = 'http://services.odata.org/v4/TripPinServiceRW/People';
const CODE_ENTITY_SET = `odataQuery = new ODataQuery(SERVICE_ROOT).entitySet('People');
this.examples[1].subscr = this.odataService.get(odataQuery).subscribe(
  (odataResponse: ODataResponse) => {
    this.examples[1].response = JSON.stringify(odataResponse.getBody(), null, 4);
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
  examples: Example[] = [
    new Example('Get service document', QUERY_SERVICE_ROOT, CODE_SERVICE_ROOT),
    new Example('Get entity set', QUERY_ENTITY_SET, CODE_ENTITY_SET)
  ];

  constructor(private odataService: ODataService) { }

  ngOnInit() {
    let odataQuery: ODataQuery = new ODataQuery(SERVICE_ROOT);
    this.examples[0].subscr = this.odataService.get(odataQuery).subscribe(
      (odataResponse: ODataResponse) => {
        this.examples[0].response = JSON.stringify(odataResponse.getBodyAsJson(), null, 4);
      }
    );
    //
    odataQuery = new ODataQuery(SERVICE_ROOT).entitySet('People');
    this.examples[1].subscr = this.odataService.get(odataQuery).subscribe(
      (odataResponse: ODataResponse) => {
        this.examples[1].response = JSON.stringify(odataResponse.getBodyAsJson(), null, 4);
      }
    );
    //
  }

  ngOnDestroy() {
    for (const example of this.examples) {
      example.subscr.unsubscribe();
    }
  }
}

class Example {
  constructor(
    public title: string,
    public query: String,
    public code: String,
    public response: String = null,
    public subscr: Subscription = null,
  ) { }
}
