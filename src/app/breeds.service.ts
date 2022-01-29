import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  getBreed(): Observable<Breeds[]> {
    const breeds = of(BREEDS)
    return breeds;
  }

  constructor() { }
}
