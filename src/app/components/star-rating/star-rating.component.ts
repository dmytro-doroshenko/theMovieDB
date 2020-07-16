import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  starRatingElements = [];

  @Input() totalStars = 5;
  @Input() value: number;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 1; i <= this.totalStars; i++) {
      this.starRatingElements.push(i);
    }
  }
}
