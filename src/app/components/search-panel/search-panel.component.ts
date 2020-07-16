import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  searchPanel = {
    searchQuery: ''
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['/search'], {queryParams: {query: this.searchPanel.searchQuery}});
  }
}
