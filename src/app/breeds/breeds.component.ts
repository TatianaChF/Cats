import { Component, OnInit } from '@angular/core';
import { Breeds } from "../breeds";
import { BREEDS } from "../more-breeds";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds = BREEDS;

  constructor() { }

  ngOnInit(): void {
  }

}
