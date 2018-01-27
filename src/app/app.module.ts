import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule, TabViewModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvReadComponent } from './docs/adv-read/adv-read.component';
import { AdvWriteComponent } from './docs/adv-write/adv-write.component';
import { BasicReadComponent } from './docs/basic-read/basic-read.component';
import { BasicWriteComponent } from './docs/basic-write/basic-write.component';
import { BatchComponent } from './docs/batch/batch.component';
import { ExampleComponent } from './docs/example/example.component';
import { MetadataComponent } from './docs/metadata/metadata.component';
import { ODataModule } from './odata/odata.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BasicReadComponent,
    BasicWriteComponent,
    AdvReadComponent,
    AdvWriteComponent,
    MetadataComponent,
    BatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ODataModule,
    TabViewModule,
    InputTextModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
