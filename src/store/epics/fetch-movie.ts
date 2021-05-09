import axios from 'axios';
import { Epic, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { EMPTY, from } from 'rxjs';
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
        ? from(axios.get<Movie>(`${Config.API.URL}/movies/${action.payload.id}`)).pipe(
            map((response) => setMovies([...state$.value.movies, response.data]))
          )
        : EMPTY
    )
  );

export default fetchMovies;

function isFetchMovie(action: Input): action is FetchMovie {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (action.payload as any).id;
}
