import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Genre, MoviesPage} from '../../models';
import {DataService, SearchService} from '../../services';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

  currentPage: number;
  genres: Genre[];
  query: string;
  resultsPage: MoviesPage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private searchService: SearchService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.query = params.query;
      this.currentPage = params.page;
      this.searchService.searchMovies(this.query, this.currentPage).subscribe((results) => {
        this.resultsPage = results;
      });
    });

    this.dataService.getGenres().subscribe((genresList) => {
      this.genres = genresList;
    });
  }
}
