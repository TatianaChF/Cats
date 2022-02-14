import { Component, OnInit, Input } from '@angular/core';
import { Breeds } from "../breeds";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  breed: Breeds | undefined;
  // breeds: Breeds[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private breedsService: BreedsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBreed();
  }

  getBreed(): void {
    const title = String(this.route.snapshot.paramMap.get('title'));
    this.breedsService.getBreed(title)
      .subscribe(breed => this.breed = breed);

  }

  goBack(): void {
    this.location.back();
  }
}


