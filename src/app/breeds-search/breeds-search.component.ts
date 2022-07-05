import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {Breed} from "../interfaces/breeds";
import {BreedsService} from "../services/breeds.service";

@Component({
  selector: 'app-breeds-search',
  templateUrl: './breeds-search.component.html',
  styleUrls: ['./breeds-search.component.css']
})
export class BreedsSearchComponent implements OnInit {
  breeds$!: Observable<Breed[]>;
  public searchTerm: string = '';

  constructor( private breedsService: BreedsService ) { }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.breedsService.search.next(this.searchTerm);
  }

  ngOnInit(): void {

  }

}
