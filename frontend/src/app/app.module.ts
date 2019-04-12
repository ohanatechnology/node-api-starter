import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { YachtListComponent } from './yacht-list/yacht-list.component';


@NgModule({
  declarations: [
    AppComponent,
    YachtListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
