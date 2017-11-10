import { HttpClientModule } from '@angular/common/http';
import { ODataService } from './odata-service/odata.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ODataService]
})
export class ODataModule { }
