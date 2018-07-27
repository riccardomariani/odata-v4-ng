import { Component, OnInit } from '@angular/core';
import { ODataQuery, ODataResponse, ODataService } from 'odata-v4-ng';
import { BasicReadComponent, EXECUTE_GET } from '../basic-read/basic-read.component';
import { ExampleData, SERVICE_ROOT } from '../example/example-data';

export const EXECUTE_GET_TO_METADATA = `example.odataQuery.get().subscribe(
  (odataResponse: ODataResponse) => {
    example.response = JSON.stringify(odataResponse.toMetadata(), null, 4);
  },
  (error: string) => {
    example.response = error;
  }
);`;

@Component({
  selector: 'ov4-metadata',
  templateUrl: '../example/example.component.html'
})
export class MetadataComponent extends BasicReadComponent implements OnInit {
  constructor(protected odataService: ODataService) { super(odataService); }

  ngOnInit() {
    this.examples = [];
    // SERVICE DOCUMENT
    let example: ExampleData = new ExampleData();
    this.examples.push(example);
    example.title = 'Get service document';
    example.query = SERVICE_ROOT;
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT);
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SERVICE METADATA
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get service metadata';
    example.query = SERVICE_ROOT + '/$metadata';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .metadata();
${EXECUTE_GET}`;
    example.func = this.executeGet;
    // SERVICE METADATA TO JSON
    example = new ExampleData();
    this.examples.push(example);
    example.title = 'Get service metadata as a json object';
    example.query = SERVICE_ROOT + '/$metadata';
    example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
      .metadata();
    example.code = `example.odataQuery = new ODataQuery(this.odataService, SERVICE_ROOT)
    .metadata();
${EXECUTE_GET_TO_METADATA}`;
    example.func = this.executeGetToMetadata;
  }

  executeGetToMetadata(example: ExampleData, odataService: ODataService): void {
    example.subscr = example.odataQuery.get().subscribe(
      (odataResponse: ODataResponse) => {
        example.response = JSON.stringify(odataResponse.toMetadata(), null, 4);
      },
      (error: string) => {
        example.response = error;
      }
    );
  }
}
