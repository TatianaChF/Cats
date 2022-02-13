import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryDataService } from "../../../../Angular/angular-tour-of-heroes/src/app/in-memory-data.service";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreedsComponent,
    BreedDetailComponent,
    MessagesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
