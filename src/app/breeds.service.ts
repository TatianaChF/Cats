import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private breedsURL = 'api/breeds';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getBreeds(title: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(this.breedsURL)
      .pipe(
        tap(_ => this.log('получены породы')),
        catchError(this.handleError<Breeds[]>('getBreeds', []))
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
}
