import {Component, OnInit} from '@angular/core';

import {DataService, GenreService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'theMovieDB';

  constructor(private dataService: DataService, private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((list) => {
      this.dataService.setGenres(list.genres);
    });
  }
}
