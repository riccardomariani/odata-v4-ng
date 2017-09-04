import { ODataService } from '../../odata/odata-service/odata.service';
import { Component, OnInit } from '@angular/core';
import { BasicWriteComponent } from '../basic-write/basic-write.component';

@Component({
  selector: 'ov4-adv-write',
  templateUrl: '../example/example.component.html',
  styleUrls: ['./adv-write.component.less']
})
export class AdvWriteComponent extends BasicWriteComponent implements OnInit {

  constructor(public odataService: ODataService) {
    super(odataService);
    this.executeEnabled = false;
  }

  ngOnInit() { }
}
