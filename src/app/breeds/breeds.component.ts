import { Component, OnInit } from '@angular/core';
import { Breeds } from "../breeds";
import { BreedsService } from "../breeds.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  selectedBreed?: Breeds;
  breeds: Breeds[] = [];

  constructor(private breedsService: BreedsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBreed();
  }

  onSelect(breed: Breeds): void {
    this.selectedBreed = breed;
    this.messageService.add(`BreedsComponent: выбрана порода ${name}`);
  }

  getBreed(): void {
    this.breedsService.getBreed()
      .subscribe(breeds => this.breeds = breeds);
  }

}
