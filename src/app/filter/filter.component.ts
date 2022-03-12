import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Breed } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
