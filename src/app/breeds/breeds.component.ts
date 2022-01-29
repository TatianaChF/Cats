import { Component, OnInit } from '@angular/core';
import { Breeds } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  selectedBreed?: Breeds;
  breeds: Breeds[] = [];

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreed();
  }

  onSelect(breed: Breeds): void {
    this.selectedBreed = breed;
  }

  getBreed(): void {
    this.breeds = this.breedsService.getBreed();
  }

}
