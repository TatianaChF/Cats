import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h1>404</h1>
  <h3>Страница не найдена!</h3>`,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
