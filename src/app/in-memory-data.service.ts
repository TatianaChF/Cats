import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Breed } from "./breeds";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const breeds = [
      { id: 1, title: 'Абиссинская кошка', image: 'assets/images/breeds/Abyssinian_cat.svg', alt: 'Photo Abyssinian Cat', category: 'Короткошерстные'},
      { id: 2, title: 'Австралийский мист', image: 'assets/images/breeds/mist.svg', alt: 'Photo Australian Mist', category: 'Короткошерстные' },
      { id: 3, title: 'Азиатская табби', image: 'assets/images/breeds/Asian_tabby.svg', alt: 'Photo Asian Tabby', category: 'Короткошерстные' },
      { id: 4, title: 'Акринская', image: 'assets/images/breeds/Akrinskaya.svg', alt: 'Photo Akrinskaya', category: 'Короткошерстные' },
      { id: 5, title: 'Американский бобтейл', image: 'assets/images/breeds/american_bob.svg', alt: 'Photo American Bobtail', category: 'Длинношерстные' },
      { id: 6, title: 'Американский кёрл', image: 'assets/images/breeds/american_curl.svg', alt: 'Photo American Curl', category: 'Длинношерстные' },
      { id: 7, title: 'Американская короткошерстная', image: 'assets/images/breeds/american_shorthair.svg', alt: 'Photo American Shorthair', category: 'Короткошерстные' },
      { id: 8, title: 'Анатолийская', image: 'assets/images/breeds/Anatolian.svg', alt: 'Photo Anatolian', category: 'Короткошерстные' },
      { id: 9, title: 'Аравийский мау', image: 'assets/images/breeds/Arabian_Mau.svg', alt: 'Photo Arabian Mau', category: 'Короткошерстные' },
      { id: 10, title: 'Балийская кошка', image: 'assets/images/breeds/Balinese_cat.svg', alt: 'Photo Balinese cat', category: 'Длинношерстные' },
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
      { id: 21, title: 'Египесткий мау', image: 'assets/images/breeds/Egyptian_mau.svg', alt: 'Photo Egyptian Mau', category: 'Короткошерстные' },
      { id: 22, title: 'Калифорнийская сияющаяя', image: 'assets/images/breeds/California_shining.svg', alt: 'Photo California Shining', category: 'Короткошерстные' },
      { id: 23, title: 'Канаани', image: 'assets/images/breeds/Kanaani.svg', alt: 'Photo Kanaani', category: 'Короткошерстные' },
      { id: 24, title: 'Канадский сфинкс', image: 'assets/images/breeds/canadian sphynx.svg', alt: 'Photo Canadian Sphynx', category: 'Лысые' },
      { id: 25, title: 'Карельский бобтейл', image: 'assets/images/breeds/Karelian_bobtail.svg', alt: 'Photo Karelian Bobtail', category: 'Длинношерстные' },
      { id: 26, title: 'Кельтская', image: 'assets/images/breeds/Celtic.svg', alt: 'Photo Celtic', category: 'Короткошерстные' },
      { id: 27, title: 'Корат', image: 'assets/images/breeds/Korat.svg', alt: 'Photo Korat', category: 'Короткошерстные' },
      { id: 28, title: 'Корниш рекс', image: 'assets/images/breeds/cornish rex.svg', alt: 'Photo Сornish Rex', category: 'Короткошерстные' },
      { id: 29, title: 'Курильский бобтейл', image: 'assets/images/breeds/kurilian bobtail.svg', alt: 'Photo Kurilian Bobtail', category: 'Длинношерстные' },
      { id: 30, title: 'Лаперм', image: 'assets/images/breeds/laperm.svg', alt: 'Photo Laperm', category: 'Длинношерстные' },
      { id: 31, title: 'Манчкин', image: 'assets/images/breeds/munchkin.svg', alt: 'Photo Munchkin', category: 'Короткошерстные' },
      { id: 32, title: 'Мейн кун', image: 'assets/images/breeds/Maine_Coon.svg', alt: 'Photo Maine Coon', category: 'Длинношерстные' },
      { id: 33, title: 'Меконгский бобтейл', image: 'assets/images/breeds/mekong bobtail.svg', alt: 'Photo Mekong Bobtail', category: 'Короткошерстные' },
      { id: 34, title: 'Минскин', image: 'assets/images/breeds/Minskin.svg', alt: 'Photo Minskin', category: 'Лысые' },
      { id: 35, title: 'Мэнкс', image: 'assets/images/breeds/manx.svg', alt: 'Photo Manx', category: 'Короткошерстные' },
      { id: 36, title: 'Наполеон', image: 'assets/images/breeds/Napoleon.svg', alt: 'Photo Napoleon', category: 'Длинношерстные' },
      { id: 37, title: 'Невская маскарадная', image: 'assets/images/breeds/neva masquerade.svg', alt: 'Photo Neva Masquerade', category: 'Длинношерстные' },
      { id: 38, title: 'Немецкий рекс', image: 'assets/images/breeds/german rex.svg', alt: 'Photo German Rex', category: 'Короткошерстные' },
      { id: 39, title: 'Нибелунг', image: 'assets/images/breeds/Nibelung.svg', alt: 'Photo Nibelung', category: 'Длинношерстные' },
      { id: 40, title: 'Норвежская лесная', image: 'assets/images/breeds/norwegian forest.svg', alt: 'Photo Norwegian Forest', category: 'Длинношерстные' },
      { id: 41, title: 'Орегон-рекс', image: 'assets/images/breeds/oregon rex.svg', alt: 'Photo Oregon Rex', category: 'Короткошерстные' },
      { id: 42, title: 'Ориентальная', image: 'assets/images/breeds/oriental cat.svg', alt: 'Photo Oriental Сat', category: 'Короткошерстные' },
      { id: 43, title: 'Охос азулес', image: 'assets/images/breeds/ohos azules.svg', alt: 'Photo Ohos Azules', category: 'Короткошерстные' },
      { id: 44, title: 'Оцикет', image: 'assets/images/breeds/ocicat.svg', alt: 'Photo Ocicat', category: 'Короткошерстные' },
      { id: 45, title: 'Персидская', image: 'assets/images/breeds/Persian_cat.svg', alt: 'Photo Persian Cat', category: 'Длинношерстные' },
      { id: 46, title: 'Петерболд', image: 'assets/images/breeds/peterbald.svg', alt: 'Photo Peterbald', category: 'Лысые' },
      { id: 47, title: 'Пиксибоб', image: 'assets/images/breeds/pixiebob.svg', alt: 'Photo Pixiebob', category: 'Короткошерстные' },
      { id: 48, title: 'Рагмаффин', image: 'assets/images/breeds/ragamuffin.svg', alt: 'Photo Ragamuffin', category: 'Длинношерстные' },
      { id: 49, title: 'Русская голубая', image: 'assets/images/breeds/Russian blue.svg', alt: 'Photo Russian Blue', category: 'Короткошерстные' },
      { id: 50, title: 'Рэгдолл', image: 'assets/images/breeds/ragdoll.svg', alt: 'Photo Ragdoll', category: 'Длинношерстные' },
      { id: 51, title: 'Саванна', image: 'assets/images/breeds/Savannah.svg', alt: 'Photo Savannah', category: 'Короткошерстные' },
      { id: 52, title: 'Священная бирма', image: 'assets/images/breeds/sacred burma.svg', alt: 'Photo Sacred Burma', category: 'Длинношерстные' },
      { id: 53, title: 'Сейшельская кошка', image: 'assets/images/breeds/seychelles cat.svg', alt: 'Photo Seychelles Cat', category: 'Короткошерстные' },
      { id: 54, title: 'Селкирк-рекс', image: 'assets/images/breeds/selkirk rex.svg', alt: 'Photo Selkirk Rex', category: 'Длинношерстные' },
      { id: 55, title: 'Серенгети', image: 'assets/images/breeds/serengeti.svg', alt: 'Photo Serengeti', category: 'Короткошерстные' },
      { id: 56, title: 'Сиамская', image: 'assets/images/breeds/Siamese_cat.svg', alt: 'Photo Siamese Cat', category: 'Короткошерстные' },
      { id: 57, title: 'Сибирская', image: 'assets/images/breeds/Siberian_cat.svg', alt: 'Photo Siberian Cat', category: 'Длинношерстные' },
      { id: 58, title: 'Скиф-той-боб', image: 'assets/images/breeds/Skif tai don.svg', alt: 'Photo Skif Tai Don', category: 'Короткошерстные' },
      { id: 59, title: 'Сингапурская', image: 'assets/images/breeds/singapore cat.svg', alt: 'Photo Singapore Cat', category: 'Короткошерстные' },
      { id: 60, title: 'Скоттиш фолд', image: 'assets/images/breeds/Scottish fold.svg', alt: 'Photo Scottish Fold', category: 'Короткошерстные' },
      { id: 61, title: 'Сноу-шу', image: 'assets/images/breeds/snowshoe.svg', alt: 'Photo Snowshoe', category: 'Короткошерстные' },
      { id: 62, title: 'Сококе', image: 'assets/images/breeds/Sokoke.svg', alt: 'Photo Sokoke', category: 'Короткошерстные' },
      { id: 63, title: 'Сомали', image: 'assets/images/breeds/Somalia.svg', alt: 'Photo Somalia', category: 'Длинношерстные' },
      { id: 64, title: 'Тайская', image: 'assets/images/breeds/Thai cat.svg', alt: 'Photo Thai Сat', category: 'Короткошерстные' },
      { id: 65, title: 'Тойгер', image: 'assets/images/breeds/toyger.svg', alt: 'Photo Toyger', category: 'Короткошерстные' },
      { id: 66, title: 'Тонкинская', image: 'assets/images/breeds/tonkinese cat.svg', alt: 'Photo Tonkinese Cat', category: 'Короткошерстные' },
      { id: 67, title: 'Турецкая ангора', image: 'assets/images/breeds/Turkish angora.svg', alt: 'Photo Turkish Angora', category: 'Длинношерстные' },
      { id: 68, title: 'Турецкий ван', image: 'assets/images/breeds/turkish van.svg', alt: 'Photo Turkish Van', category: 'Длинношерстные' },
      { id: 69, title: 'Украинский левкой', image: 'assets/images/breeds/Ukrainian Levkoy.svg', alt: 'Photo Ukrainian Levkoy', category: 'Лысые' },
      { id: 70, title: 'Уральский рекс', image: 'assets/images/breeds/ural rex.svg', alt: 'Photo Ural Rex', category: 'Короткошерстные' },
      { id: 71, title: 'Форин Вайт', image: 'assets/images/breeds/Foreign White.svg', alt: 'Photo Foreign White', category: 'Короткошерстные' },
      { id: 72, title: 'Хайленд фолд', image: 'assets/images/breeds/highland fold.svg', alt: 'Photo Highland Fold', category: 'Длинношерстные' },
      { id: 73, title: 'Хауси', image: 'assets/images/breeds/hausi.svg', alt: 'Photo Hausi', category: 'Короткошерстные' },
      { id: 74, title: 'Цейлонская кошка', image: 'assets/images/breeds/ceylon cat.svg', alt: 'Photo Ceylon Cat', category: 'Короткошерстные' },
      { id: 75, title: 'Шартрез', image: 'assets/images/breeds/Chartreuse.svg', alt: 'Photo Chartreuse', category: 'Короткошерстные' },
      { id: 76, title: 'Шантильи-тиффани', image: 'assets/images/breeds/Chantilly-tiffany.svg', alt: 'Photo Chantilly Tiffany', category: 'Длинношерстные' },
      { id: 77, title: 'Эгейская', image: 'assets/images/breeds/Aegean.svg', alt: 'Photo Aegean', category: 'Короткошерстные' },
      { id: 78, title: 'Экзотическая', image: 'assets/images/breeds/exotic shorthair.svg', alt: 'Photo Exotic Shorthair', category: 'Короткошерстные' },
      { id: 79, title: 'Яванез', image: 'assets/images/breeds/javanese.svg', alt: 'Photo Javanese', category: 'Длинношерстные' },
      { id: 80, title: 'Японский бобтейл', image: 'assets/images/breeds/japanese bobtail.svg', alt: 'Photo japanese Bobtail', category: 'Короткошерстные' }
    ];
    return {breeds};
  }

  genId(breeds: Breed[]): number {
    return breeds.length > 0 ? Math.max(...breeds.map(breed => breed.id)) + 1 : 1;
  }

  constructor() { }
}
