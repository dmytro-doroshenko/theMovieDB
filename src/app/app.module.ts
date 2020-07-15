import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GenreBadgeComponent} from './components/genre-badge/genre-badge.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MoviesPageComponent} from './components/movies-page/movies-page.component';
import {StarComponent} from './components/star/star.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {HeaderComponent} from './components/header/header.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreBadgeComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieInfoComponent,
    MoviesPageComponent,
    StarComponent,
    PaginationComponent,
    StarRatingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
