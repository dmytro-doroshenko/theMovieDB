import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Genre, MoviesPage} from '../../models';
import {GenreService, MovieService} from '../../services';

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
    private genreService: GenreService,
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

    this.genreService.getAllGenres().subscribe((list) => {
      this.genres = list.genres;
    });
  }
}
