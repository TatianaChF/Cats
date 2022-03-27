import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreedsSearchComponent } from './breeds-search/breeds-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from "@angular/common";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreedsComponent,
    BreedDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BreedsSearchComponent,
    NotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    CommonModule,
    CommonModule,
    CommonModule
  ],
  providers: [],
  exports: [BreedsSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
