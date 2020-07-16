import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {MoviesPage} from '../models';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  key = environment.api_key;

  searchMovies(query: string, page: number): Observable<MoviesPage> {
    const url = environment.api_search_movies_URL;

    return this.http.get<MoviesPage>(`${url}?api_key=${this.key}&query=${query}&page=${page}`);
  }
}
