import { EMPTY } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Config } from '../../config';
import { DeleteMovie, MoviesActions } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = DeleteMovie;

const deleteMovie: Epic<Input, Input, AppState> = (action$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.CREATE_MOVIE),
    mergeMap((action: DeleteMovie) => {
      ajax.delete(`${Config.API.URL}/movies/${action.payload.id}`);
      return EMPTY;
    })
  );

export default deleteMovie;
