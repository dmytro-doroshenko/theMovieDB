import {MovieInfo} from './movieInfo';

export interface MoviesPage {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieInfo[];
}
