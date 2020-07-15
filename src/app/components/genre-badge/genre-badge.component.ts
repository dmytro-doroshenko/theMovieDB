import {Component, Input, OnInit} from '@angular/core';

import {Genre} from '../../models';
import {GenreService} from '../../services';

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

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    if (!this.genres) {
      this.genreNames = this.genreService.getGenreNames(this.genreIds, this.allGenres);
    } else {
      this.genres.forEach(genre => {
        this.genreNames.push(genre.name);
      });
    }
  }
}
