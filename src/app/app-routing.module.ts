import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {BreedsComponent} from "./breeds/breeds.component";
import {BreedDetailComponent} from "./breed-detail/breed-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ArtComponent} from "./art/art.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'art', component: ArtComponent },
  { path: 'detail/:id', component: BreedDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
