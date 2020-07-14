import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() currentPage: number;
  @Input() totalPages: number;

  interval = 5;
  pages = [];

  constructor() {
  }

  setPages(currentPage: number, totalPages: number, interval: number): number[] {
    const pages = [];

    let leftBorder;
    let rightBorder;

    if (currentPage - interval > 1) {
      leftBorder = currentPage - interval;
    } else {
      leftBorder = 2;
    }

    if (currentPage + interval < totalPages) {
      rightBorder = currentPage + interval;
    } else {
      rightBorder = totalPages - 1;
    }

    for (let i = leftBorder; i <= rightBorder; i++) {
      pages.push(i);
    }

    return pages;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = this.setPages(this.currentPage, this.totalPages, this.interval);
  }
}
