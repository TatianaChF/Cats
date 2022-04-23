import { Component, OnInit } from '@angular/core';
import { GALLERY } from "../more-photo";
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit {

  gallery = GALLERY;

  ngOnInit(): void {
  }

}
