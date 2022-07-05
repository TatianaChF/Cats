import { Injectable } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class PhotoService {

  constructor(private http: HttpClient) { }
}
