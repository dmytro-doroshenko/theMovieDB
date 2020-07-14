import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MovieInfoExtended} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: MovieInfoExtended;
  movieId: number;
  posterPath: string = environment.api_poster_URL;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe( (params) => {
      this.movieId = params.movieId;
    });
  }

  ngOnInit(): void {
    this.movieService.getMovieInfo(this.movieId).subscribe(data => {
      this.movie = data;
    });
  }
}
