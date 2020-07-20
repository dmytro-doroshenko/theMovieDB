import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Genre} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private genres = new BehaviorSubject(null);

  constructor() {
  }

  getGenres(): BehaviorSubject<Genre[]> {
    return this.genres;
  }

  setGenres(genresList): void {
    this.genres.next(genresList);
  }
}
