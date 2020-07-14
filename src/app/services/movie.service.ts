import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Genre, GenresList, MovieInfoExtended, MoviesPage} from '../models';

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

  getAllGenres(): Observable<GenresList> {
    const url = environment.api_genres_list_URL;
    const key = environment.api_key;

    return this.http.get<GenresList>(`${url}?api_key=${key}`);
  }

  async getGenreNames(idsList: number[], genresList: Genre[]): Promise<string[]> {
    const namesList = [];

    await idsList.forEach(id => {
      const {name} = genresList.find(el => el.id === id);
      namesList.push(name);
    });

    return namesList;
  }
}
