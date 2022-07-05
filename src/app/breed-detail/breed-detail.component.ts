import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Breed} from "../interfaces/breeds";
import {BreedsService} from "../services/breeds.service";

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  breed: Breed | undefined;

  constructor(
    private route: ActivatedRoute,
    private breedsService: BreedsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBreed();
  }

   getBreed(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.breedsService.getBreed(id)
      .subscribe(breed => this.breed = breed);

  }

  goBack(): void {
    this.location.back();
  }
}


