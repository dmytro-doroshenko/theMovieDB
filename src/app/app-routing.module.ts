import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {MoviesPageComponent} from './components/movies-page/movies-page.component';

const routes: Routes = [
  {path: '', component: MoviesPageComponent},
  {path: 'movie/:movieId', component: MovieInfoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
