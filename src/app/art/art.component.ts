import {Component, OnInit} from '@angular/core';
import {IMAGE_AFTER, IMAGE_DIFFERENT, IMAGE_EGYPT} from "./interface-data/images-egypt";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public images_egypt = IMAGE_EGYPT;
  public images_different = IMAGE_DIFFERENT;
  public images_after = IMAGE_AFTER;
  public animState = 'middle';
  public animImage!: number;

  constructor() { }

  ngOnInit(): void {
  }

  public previous(): void {
    this.animState = 'left';
    this.animImage = this.animImage > 0 ? this.animImage - 1 : this.images_egypt.length - 1;
    this.blur();
  }

  public next(): void {
    this.animState = 'right';
    this.animImage = this.animImage < this.images_egypt.length - 1 ? this.animImage + 1 : 0;
    this.blur();
  }

  public onEvent(event: Event): void {
    event.stopPropagation();
  }


  private blur(): void {
    const activeElement = document.activeElement as HTMLElement;
    if(activeElement !== null) {
      activeElement.blur();
    }
  }

}
