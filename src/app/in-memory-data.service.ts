import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Breeds } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const breeds = [
      { id: 1, title: 'Абиссинская кошка' },
      { id: 2, title: 'Австралийский мист' },
      { id: 3, title: 'Азиатская табби' },
      { id: 4, title: 'Акринская' },
      { id: 5, title: 'Американский бобтейл' },
      { id: 6, title: 'Американский кёрл' },
      { id: 7, title: 'Американская короткошерстная' },
      { id: 8, title: 'Анатолийская' }
    ];
    return {breeds};
  }

  genId(breeds: Breeds[]): number {
    return breeds.length > 0 ? Math.max (...breeds.map(breed => breed.id)) + 1 : 1;
  }

  constructor() { }
}
