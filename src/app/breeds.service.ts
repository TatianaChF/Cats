import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs";

import { Breeds } from "./breeds";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private breedsURL = 'api/breeds';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getBreeds(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(this.breedsURL)
      .pipe(
        tap(_ => this.log('получены породы')),
        catchError(this.handleError<Breeds[]>('getBreeds', []))
      );
  }

  getBreedNo404<Data>(id: number): Observable<Breeds> {
    const url = `${this.breedsURL}/?id=${id}`;
    return this.http.get<Breeds[]>(url)
      .pipe(
        map(breeds => breeds[0]),
        tap(b => {
          const outcome = b ? 'обнаружена' : 'не обнаружна';
          this.log(`${outcome} breed id=${id}`);
        }),
        catchError(this.handleError<Breeds>(`getBreed id=${id}`))
      );
  } // получение породы по названию, если она не определена, то возвращается 'undefined'

    getBreed(id: number): Observable<Breeds> {
    const url = `${this.breedsURL}/${id}`;
    return this.http.get<Breeds>(url).pipe(
      tap(_ => this.log(`получена порода ${id}`)),
      catchError(this.handleError<Breeds>(`getBreed title=${id}`))
    );
  } // Получение породы по названию. Если порода не будет найдена, то выйдет ошибка 404

  searchBreeds(term: string): Observable<Breeds[]> {
    if (!term.trim()) { // если порода не найдена, то возвращается пустой массив
      // метод trim() удаляет пробелы в начале и в конце строки, не изменяя саму строку
      return of([]);
    }
    return this.http.get<Breeds[]>(`${this.breedsURL}/?title=${term}`).pipe(
      tap(x => x.length ?
        this.log(`найден порода, соотвествующая "${term}"`) :
        this.log(`нет пород, которые соответствуют "${term}"`)),
      catchError(this.handleError<Breeds[]>('searchHero', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} не удалось: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`BreedsService: ${message}`);
  }

}
