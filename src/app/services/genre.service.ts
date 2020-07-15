import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Genre, GenresList} from '../models';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {
  }

  getAllGenres(): Observable<GenresList> {
    const url = environment.api_genres_list_URL;
    const key = environment.api_key;

    return this.http.get<GenresList>(`${url}?api_key=${key}`);
  }

  getGenreNames(idsList: number[], genresList: Genre[]): string[] {
    const namesList = [];

    idsList.forEach(id => {
      const {name} = genresList.find(el => el.id === id);
      namesList.push(name);
    });

    return namesList;
  }
}
