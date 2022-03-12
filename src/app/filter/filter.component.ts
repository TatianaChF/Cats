import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Breed } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  breeds: Breed[] = [];

  constructor(private breedsService: BreedsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getVarias();
  }

  getVarias(): void {
    this.breedsService.getBreeds()
      .subscribe(breeds => this.breeds = breeds);
  }
}
