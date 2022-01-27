import { Component, OnInit, Input } from '@angular/core';
import { Breeds } from "../breeds";

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  @Input() breed?: Breeds;

  constructor() { }

  ngOnInit(): void {
  }

}
