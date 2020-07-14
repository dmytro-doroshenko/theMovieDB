import {Component, OnInit} from '@angular/core';

import {Genre, MoviesPage} from '../../models';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  genres: Genre[];
  pageData: MoviesPage;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query) => {
      const page = query.page;
      this.movieService.getMovies(page).subscribe((data) => {
        this.pageData = data;
      });
    });

    this.movieService.getAllGenres().subscribe((list) => {
      this.genres = list.genres;
    });
  }
}
