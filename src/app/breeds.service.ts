import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BREEDS } from "./more-breeds";
import { Breeds } from "./breeds";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  getBreed(): Observable<Breeds[]> {
    const breeds = of(BREEDS);
    this.messageService.add('BreedsService: порода выбрана');
    return breeds;
  }

  constructor(private messageService: MessageService) { }
}
