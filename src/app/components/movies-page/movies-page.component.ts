import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Genre, MoviesPage} from '../../models';
import {DataService, GenreService, MovieService} from '../../services';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  genres: Genre[];
  pageData: MoviesPage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private movieService: MovieService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query) => {
      const page = query.page;
      this.movieService.getMovies(page).subscribe((data) => {
        this.pageData = data;
      });
    });

    this.dataService.getGenres().subscribe((genresList) => {
      this.genres = genresList;
    });
  }
}
