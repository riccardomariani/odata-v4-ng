import { ODataService } from './odata/odata-service/odata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ODataModule } from './odata/odata.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ODataModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
