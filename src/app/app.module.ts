import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  GenreBadgeComponent,
  HeaderComponent,
  MovieCardComponent,
  MovieInfoComponent,
  MoviesPageComponent,
  PaginationComponent,
  SearchPanelComponent,
  SearchResultsPageComponent,
  StarComponent,
  StarRatingComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    GenreBadgeComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieInfoComponent,
    MoviesPageComponent,
    PaginationComponent,
    StarComponent,
    StarRatingComponent,
    SearchPanelComponent,
    SearchResultsPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
