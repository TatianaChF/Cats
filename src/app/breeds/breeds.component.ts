import {Component, OnInit} from '@angular/core';

import {Breed} from "../breeds";
import {BreedsService} from "../services/breeds.service";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breeds: Breed[] = [];
  searchKey: string = "";
  public filterCategory: any;

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreeds();
    this.breedsService.search.subscribe((val:any) => {
      this.searchKey = val;
    })
  }

  getBreeds(): void {
    this.breedsService.getBreeds()
      .subscribe(breeds => {
        this.breeds = breeds;
        this.filterCategory = breeds;

        this.breeds.forEach((breed: any) => {
            if(breed.category === "Все") {
              breed.category = "Все";
            }
          }
        )});
    console.log(this.breeds);
  }

  filter(category: string) {
    this.filterCategory = this.breeds
      .filter((breed: any) => {
        if(breed.category == category || category == "") {
          return breed;
        }
      })
  }

}
