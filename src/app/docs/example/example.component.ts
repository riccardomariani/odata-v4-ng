import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExampleData } from './example-data';
import { ODataService } from '../../odata/odata-service/odata.service';

@Component({
  selector: 'ov4-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit, OnDestroy {
  executeEnabled = true;
  examples: ExampleData[];

  constructor(public odataService: ODataService) { }

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
}
