import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {BreedsComponent} from "./breeds/breeds.component";
import { BreedDetailComponent } from "./breed-detail/breed-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'breeds/detail/:title', component: BreedDetailComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
