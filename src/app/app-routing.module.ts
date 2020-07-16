import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MovieInfoComponent, MoviesPageComponent, SearchResultsPageComponent} from './components';

const routes: Routes = [
  {path: '', component: MoviesPageComponent},
  {path: 'movie/:movieId', component: MovieInfoComponent},
  {path: 'search', component: SearchResultsPageComponent},
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
