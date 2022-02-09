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

  breeds: Breeds[] = [];

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreed();
  }

  getBreed(): void {
    // @ts-ignore
    this.breedsService.getBreed()
      .subscribe(breeds => this.breeds = breeds);
  }

}
