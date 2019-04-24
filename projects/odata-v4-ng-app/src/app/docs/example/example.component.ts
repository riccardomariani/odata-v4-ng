import { Component, OnDestroy, OnInit } from '@angular/core';
import { ODataResponse, ODataService } from 'odata-v4-ng';
import { ExampleData } from './example-data';

@Component({
  selector: 'ov4-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit, OnDestroy {
  executeEnabled = true;
  examples: ExampleData[];

  constructor(protected odataService: ODataService) { }

  ngOnInit() {
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

  execute(example: ExampleData): void {
    if (example.func) {
      example.func(example, this.odataService);
    }
  }

  executeGet(example: ExampleData, odataService: ODataService): void {
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
        this.executeGet(example, this.odataService);
      }
    }
  }
}
