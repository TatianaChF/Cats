import { Component, OnInit } from '@angular/core';

import { Breed } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breeds: Breed[] = [];
  searchKey: string = "";

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.breedsService.getBreeds()
        .subscribe(breeds => this.breeds = breeds);
  }

}
