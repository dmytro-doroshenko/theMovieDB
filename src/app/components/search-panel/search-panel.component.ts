import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MovieService} from '../../services';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  searchPanel = {
    searchQuery: ''
  };

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['/search'], {queryParams: {query: this.searchPanel.searchQuery}});
  }
}
