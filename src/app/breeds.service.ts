import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {BehaviorSubject, Observable, of} from "rxjs";
import { catchError, tap } from "rxjs";

import { Breed } from "./breeds";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  breeds: Breed[] = [];
  private breedsURL = 'api/breeds';
  public search = new BehaviorSubject<string>(""); // переменная, которая хранит последнее значение поиска (начальное значение - пуста строка)

  constructor(private http: HttpClient, private messageService: MessageService) { }

   getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.breedsURL)
      .pipe(
        tap(_ => this.log('получены породы')),
        catchError(this.handleError<Breed[]>('getBreeds', []))
      );
  }

   getBreed(id: number): Observable<Breed> {
    const url = `${this.breedsURL}/${id}`;
    return this.http.get<Breed>(url).pipe(
      tap(_ => this.log(`получена порода ${id}`)),
      catchError(this.handleError<Breed>(`getBreed title=${id}`))
    );
  } // Получение породы по названию. Если порода не будет найдена, то выйдет ошибка 404

  searchBreeds(term: string): Observable<Breed[]> {
    if (!term.trim()) { // если порода не найдена, то возвращается пустой массив
      // метод trim() удаляет пробелы в начале и в конце строки, не изменяя саму строку
      return of([]);
    }
    return this.http.get<Breed[]>(`${this.breedsURL}/?title=${term}`).pipe(
      tap(x => x.length ?
        this.log(`найден порода, соотвествующая "${term}"`) :
        this.log(`нет пород, которые соответствуют "${term}"`)),
      catchError(this.handleError<Breed[]>('searchBreeds', []))
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
