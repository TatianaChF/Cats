import { Component, OnInit } from '@angular/core';
import { Breeds } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  breeds: Breeds[] | undefined;

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    // @ts-ignore
    this.breedsService.getBreeds()
      .subscribe(breeds => this.breeds = breeds.slice(1,5));
  }

}
