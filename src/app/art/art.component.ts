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

}
