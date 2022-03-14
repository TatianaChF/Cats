import { Component, OnInit } from '@angular/core';
import {filter, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Breed } from "../breeds";
import { BreedsService } from "../breeds.service";
import { Filter } from "../filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  breeds: Breed[] = [];
  filters: Filter[] = [];

  constructor(private breedsService: BreedsService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  getFilters(): void {
    this.breedsService.getFilters()
      .subscribe(filters => this.filters = filters);
  }

}
