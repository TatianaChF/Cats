import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

    getBreed(title: string): Observable<Breeds[]> {
    const breeds = of(BREEDS);
    this.messageService.add('BreedsService: выбранные породы');
    return breeds;
  }

  constructor(private messageService: MessageService) { }
}
