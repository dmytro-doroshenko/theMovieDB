import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {MovieInfoExtended, MoviesPage} from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getMovies(page?: number): Observable<MoviesPage> {
    const url = environment.api_movies_list_URL;
    const key = environment.api_key;

    return this.http.get<MoviesPage>(`${url}?api_key=${key}&page=${page}`);
  }

  getMovieInfo(movieId: number): Observable<MovieInfoExtended> {
    const url = environment.api_movie_info_URL;
    const key = environment.api_key;

    return this.http.get<MovieInfoExtended>(`${url}/${movieId}?api_key=${key}`);
  }
}
