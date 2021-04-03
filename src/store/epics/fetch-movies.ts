import { Epic, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Config } from '../../config';
import { Movie } from '../../models';
import { FetchMovies, MoviesActions, setMovies, SetMovies } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = FetchMovies | SetMovies;

const fetchMovies: Epic<Input, SetMovies, AppState> = (action$, state$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.FETCH_MOVIES),
    mergeMap(() => {
      const query = Object.entries(state$.value.sortingOptions)
        .filter(([, value]) => {
          if (Array.isArray(value)) {
            return value.length;
          }
          return value;
        })
        .map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(',') : value}`)
        .join('&');
      return ajax
        .getJSON<{ data: Movie[] }>(`${Config.API.URL}/movies?${query}`)
        .pipe(map((response) => setMovies(response.data)));
    })
  );

export default fetchMovies;
