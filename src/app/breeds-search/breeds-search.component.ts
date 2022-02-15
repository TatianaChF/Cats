import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import {
  debounceTime, distinctUntilChanged, switchMap
} from "rxjs/operators";

import { Breeds } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-breeds-search',
  templateUrl: './breeds-search.component.html',
  styleUrls: ['./breeds-search.component.css']
})
export class BreedsSearchComponent implements OnInit {
  breeds$!: Observable<Breeds[]>;
  private searchTerms = new Subject<string>();

  constructor(private breedsService: BreedsService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.breeds$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.breedsService.searchBreeds(term)),
    );
  }

}
