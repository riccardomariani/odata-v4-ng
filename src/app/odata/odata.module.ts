import { HttpModule } from '@angular/http';
import { ODataService } from './odata-service/odata.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ODataService]
})
export class ODataModule { }
