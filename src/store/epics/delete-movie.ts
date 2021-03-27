import { EMPTY, of } from 'rxjs';
import axios from 'axios';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Config } from '../../config';
import { DeleteMovie, MoviesActions } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = DeleteMovie;

const deleteMovie: Epic<Input, Input, AppState> = (action$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.DELETE_MOVIE),
    mergeMap((action: DeleteMovie) => {
      of(axios.delete(`${Config.API.URL}/movies/${action.payload.id}`)).subscribe();
      return EMPTY;
    })
  );

export default deleteMovie;
