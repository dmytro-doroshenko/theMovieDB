import {Component, Input, OnInit} from '@angular/core';

import {Genre} from '../../models';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {

  @Input() allGenres: Genre[];
  @Input() genres: Genre[];
  @Input() genreIds: number[];

  genreNames: string[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    if (!this.genres) {
      this.movieService.getGenreNames(this.genreIds, this.allGenres)
        .then(names => this.genreNames = names);
    }
  }

}
