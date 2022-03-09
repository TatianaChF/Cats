import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Breed } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const breeds = [
      { id: 1, title: 'Абиссинская кошка', image: 'assets/images/breeds/Abyssinian_cat.svg', alt: 'Photo Abyssinian Cat', species: 'Short Haired'  },
      { id: 2, title: 'Австралийский мист', image: 'assets/images/breeds/mist.svg', alt: 'Photo Australian Mist', species: 'Short Haired'  },
      { id: 3, title: 'Азиатская табби', image: 'assets/images/breeds/Asian_tabby.svg', alt: 'Photo Asian Tabby', species: 'Short Haired'  },
      { id: 4, title: 'Акринская', image: 'assets/images/breeds/Akrinskaya.svg', alt: 'Photo Akrinskaya', species: 'Short Haired'  },
      { id: 5, title: 'Американский бобтейл', image: 'assets/images/breeds/american_bob.svg', alt: 'Photo American Bobtail', species: 'Varia'  },
      { id: 6, title: 'Американский кёрл', image: 'assets/images/breeds/american_curl.svg', alt: 'Photo American Curl', species: 'Varia'  },
      { id: 7, title: 'Американская короткошерстная', image: 'assets/images/breeds/american_shorthair.svg', alt: 'Photo American Shorthair', species: 'Short Haired'  },
      { id: 8, title: 'Анатолийская', image: 'assets/images/breeds/Anatolian.svg', alt: 'Photo Anatolian', species: 'Short Haired'  }
    ];
    return {breeds};
  }

  genId(breeds: Breed[]): number {
    return breeds.length > 0 ? Math.max(...breeds.map(breed => breed.id)) + 1 : 1;
  }

  constructor() { }
}
