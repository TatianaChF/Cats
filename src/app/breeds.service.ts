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

  getBreedNo404<Data>(title: string): Observable<Breeds> {
    const url = `${this.breedsURL}/?title=${title}`;
    return this.http.get<Breeds[]>(url)
      .pipe(
        map(breeds => breeds[0]),
        tap(b => {
          const outcome = b ? 'обнаружена' : 'не обнаружна';
          this.log(`${outcome} breed title=${title}`);
        }),
        catchError(this.handleError<Breeds>(`getBreed title=${title}`))
      );
  }

  getBreed(title: string): Observable<Breeds> {
    const url = `${this.breedsURL}/${title}`;
    return this.http.get<Breeds>(url).pipe(
      tap(_ => this.log(`получена порода ${title}`)),
      catchError(this.handleError<Breeds>(`getBreed ${title}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`BreedsService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} не удалось: ${error.message}`);
      return of(result as T);
    }
  }

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
}
