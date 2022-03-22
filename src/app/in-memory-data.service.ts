import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Breed } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const breeds = [
      { id: 1, title: 'Абиссинская кошка', image: 'assets/images/breeds/Abyssinian_cat.svg', alt: 'Photo Abyssinian Cat', category: 'Короткошерстные' },
      { id: 2, title: 'Австралийский мист', image: 'assets/images/breeds/mist.svg', alt: 'Photo Australian Mist', category: 'Короткошерстные' },
      { id: 3, title: 'Азиатская табби', image: 'assets/images/breeds/Asian_tabby.svg', alt: 'Photo Asian Tabby', category: 'Короткошерстные' },
      { id: 4, title: 'Акринская', image: 'assets/images/breeds/Akrinskaya.svg', alt: 'Photo Akrinskaya', category: 'Короткошерстные' },
      { id: 5, title: 'Американский бобтейл', image: 'assets/images/breeds/american_bob.svg', alt: 'Photo American Bobtail', category: 'Все' },
      { id: 6, title: 'Американский кёрл', image: 'assets/images/breeds/american_curl.svg', alt: 'Photo American Curl', category: 'Все' },
      { id: 7, title: 'Американская короткошерстная', image: 'assets/images/breeds/american_shorthair.svg', alt: 'Photo American Shorthair', category: 'Короткошерстные' },
      { id: 8, title: 'Анатолийская', image: 'assets/images/breeds/Anatolian.svg', alt: 'Photo Anatolian', category: 'Короткошерстные' },
      { id: 9, title: 'Аравийский мау', image: 'assets/images/breeds/Arabian_Mau.svg', alt: 'Photo Arabian Mau', category: 'Короткошерстные' },
      { id: 9, title: 'Балийская кошка', image: 'assets/images/breeds/Balinese_cat.svg', alt: 'Photo Balinese cat', category: 'Длинношерстные' },
      { id: 11, title: 'Бенгальская', image: 'assets/images/breeds/Bengali.svg', alt: 'Photo Bengal', category: 'Короткошерстные' },
      { id: 12, title: 'Бомбейская', image: 'assets/images/breeds/Bombay.svg', alt: 'Photo Bombay', category: 'Короткошерстные' },
      { id: 13, title: 'Бразильская короткошерстная', image: 'assets/images/breeds/Brasilian.svg', alt: 'Photo Brasilian cat', category: 'Короткошерстные' },
      { id: 14, title: 'Британская', image: 'assets/images/breeds/Britian.svg', alt: 'Photo Britian cat', category: 'Короткошерстные' },
      { id: 15, title: 'Бирма', image: 'assets/images/breeds/Birma.svg', alt: 'Photo Birma', category: 'Короткошерстные' },
      { id: 16, title: 'Бурмилла', image: 'assets/images/breeds/Burmilla.svg', alt: 'Photo Burmilla', category: 'Короткошерстные' },
      { id: 17, title: 'Гаванна', image: 'assets/images/breeds/Gawanna.svg', alt: 'Photo Gawanna', category: 'Короткошерстные' },
      { id: 18, title: 'Гималайская кошка', image: 'assets/images/breeds/Himalayan_cat.svg', alt: 'Photo Himalayan Сat', category: 'Длинношерстные' },
      { id: 19, title: 'Девон рекс', image: 'assets/images/breeds/Devon_rex.svg', alt: 'Photo Devon Rex', category: 'Короткошерстные' },
      { id: 20, title: 'Донской сфинкс', image: 'assets/images/breeds/don sphinx.svg', alt: 'Photo Don Sphinx', category: 'Лысые' },
      { id: 21, title: 'Кельтская', image: 'assets/images/breeds/Celtic.svg', alt: 'Photo Celtic', category: 'Короткошерстные' },
      { id: 22, title: 'Египесткий мау', image: 'assets/images/breeds/Egyptian_mau.svg', alt: 'Photo Egyptian Mau', category: 'Короткошерстные' },
      { id: 23, title: 'Калифорнийская сияющаяя', image: 'assets/images/breeds/California_shining.svg', alt: 'Photo California Shining', category: 'Короткошерстные' },
      { id: 24, title: 'Канаани', image: 'assets/images/breeds/Kanaani.svg', alt: 'Photo Kanaani', category: 'Короткошерстные' },
      { id: 25, title: 'Карельский бобтейл', image: 'assets/images/breeds/Karelian_bobtail.svg', alt: 'Photo Karelian Bobtail', category: 'Длинношерстные' },
      { id: 26, title: 'Кимрик', image: 'assets/images/breeds/Kimrick.svg', alt: 'Photo Kimrick', category: 'Длинношерстные' }
    ];
    return {breeds};
  }

  genId(breeds: Breed[]): number {
    return breeds.length > 0 ? Math.max(...breeds.map(breed => breed.id)) + 1 : 1;
  }

  constructor() { }
}
