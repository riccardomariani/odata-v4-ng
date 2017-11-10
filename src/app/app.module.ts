import { ODataService } from './odata/odata-service/odata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ODataModule } from './odata/odata.module';
import { BasicReadComponent } from './docs/basic-read/basic-read.component';
import { BasicWriteComponent } from './docs/basic-write/basic-write.component';
import { AdvReadComponent } from './docs/adv-read/adv-read.component';
import { AdvWriteComponent } from './docs/adv-write/adv-write.component';
import { TabViewModule } from 'primeng/primeng';
import { ExampleComponent } from './docs/example/example.component';
import { MetadataComponent } from './docs/metadata/metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BasicReadComponent,
    BasicWriteComponent,
    AdvReadComponent,
    AdvWriteComponent,
    MetadataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ODataModule,
    TabViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
