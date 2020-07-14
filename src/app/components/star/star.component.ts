import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  starClassName = 'star-rating-blank';

  @Input() rating;
  @Input() starId;

  constructor() {
  }

  ngOnInit(): void {

    if (this.rating >= this.starId) {
      this.starClassName = 'star-rating-filled';
    }
  }
}
