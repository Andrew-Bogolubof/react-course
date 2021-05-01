import { Epic, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { EMPTY } from 'rxjs';
import { Config } from '../../config';
import { Movie } from '../../models';
import { FetchMovie, MoviesActions, setMovies, SetMovies } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = FetchMovie | SetMovies;

const fetchMovies: Epic<Input, SetMovies, AppState> = (action$, state$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.FETCH_MOVIE),
    mergeMap((action) =>
      isFetchMovie(action)
        ? ajax
            .getJSON<Movie>(`${Config.API.URL}/movies/${action.payload.id}`)
            .pipe(map((response) => setMovies([...state$.value.movies, response])))
        : EMPTY
    )
  );

export default fetchMovies;

function isFetchMovie(action: Input): action is FetchMovie {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (action.payload as any).id;
}
