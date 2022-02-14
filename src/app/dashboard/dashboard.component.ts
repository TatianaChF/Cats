import { Component, OnInit } from '@angular/core';
import { Breeds } from "../breeds";
import { BreedsService } from "../breeds.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
