// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_key: 'b1e5d2c66902fc6ea0f82409db6a6c6c',
  api_movie_info_URL: 'https://api.themoviedb.org/3/movie',
  api_genres_list_URL: 'https://api.themoviedb.org/3/genre/movie/list',
  api_movies_list_URL: 'https://api.themoviedb.org/3/discover/movie',
  api_poster_URL: 'https://image.tmdb.org/t/p/w400',
  logo_src: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
