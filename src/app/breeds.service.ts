import { Injectable } from '@angular/core';
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  getBreed(): Breeds[] {
    return BREEDS;
  }

  constructor() { }
}
