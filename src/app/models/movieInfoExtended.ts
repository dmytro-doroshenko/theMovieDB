import {Genre} from './genre';
import {ProductionCompanies} from './productionCompanies';
import {ProductionCountries} from './productionCountries';
import {SpokenLanguages} from './spokenLanguages';

export interface MovieInfoExtended {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
