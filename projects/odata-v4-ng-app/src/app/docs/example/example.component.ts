import { Component, OnDestroy } from '@angular/core';
import { ODataResponse } from 'odata-v4-ng';
import { ExampleData } from './example-data';

@Component({
  selector: 'ov4-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnDestroy {
  executeEnabled = true;
  examples: ExampleData[];

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
      example.func(example);
    }
  }

  executeGet(example: ExampleData): void {
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
}
