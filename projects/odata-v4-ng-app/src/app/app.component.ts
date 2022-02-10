import { Component } from '@angular/core';
import { SERVICE_ROOT } from './docs/example/example-data';

@Component({
  selector: 'ov4-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'odata-v4-ng';
  serviceRoot: string = SERVICE_ROOT;
}
