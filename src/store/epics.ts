import { combineEpics, Epic, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Config } from '../config';
import { Movie } from '../models';
import { FetchMovies, RootActions, setMovies, SetMovies } from './actions';

const fetchMovies: Epic<FetchMovies, SetMovies, Movie[]> = (action$) =>
  action$.pipe(
    ofType<FetchMovies>(RootActions.FETCH_MOVIES),
    mergeMap(() =>
      ajax
        .getJSON<{ data: Movie[] }>(`${Config.API.URL}/movies?limit=6`)
        .pipe(map((response) => setMovies(response.data)))
    )
  );

export const rootEpics = combineEpics(fetchMovies);

export const rootEpic = combineEpics(fetchMovies);
