import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private messageService: MessageService) { }

    getBreed(title: string): Observable<Breeds[]> {
    const breeds = of(BREEDS);
    this.messageService.add('BreedsService: выбранные породы');
    return breeds;
  }

  getBreeds(title: string): Observable<Breeds> {
    const breed = BREEDS.find(b => b.title === title)!;
    this.messageService.add(`BreedService: fetched breed title=${title}`);
    return of(breed);
  }
}
