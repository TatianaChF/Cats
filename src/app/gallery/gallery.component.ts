import { Component, OnInit } from '@angular/core';
import { GALLERY } from "../more-photo";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery = GALLERY;

  constructor() { }

  ngOnInit(): void {
  }

}
