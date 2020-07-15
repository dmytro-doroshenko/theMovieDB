import {Component, Input, OnInit} from '@angular/core';

import {environment} from '../../../environments/environment';
import {Genre, MovieInfo} from '../../models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() allGenres: Genre[];
  @Input() movieInfo: MovieInfo;

  posterPath: string;

  constructor() { }

  ngOnInit(): void {
    this.posterPath = environment.api_poster_URL + this.movieInfo.poster_path;
  }
}
