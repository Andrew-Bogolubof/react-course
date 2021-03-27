import { EMPTY } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Config } from '../../config';
import { UpdateMovie, MoviesActions } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = UpdateMovie;

const updateMovie: Epic<Input, Input, AppState> = (action$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.CREATE_MOVIE),
    mergeMap((action: UpdateMovie) => {
      ajax.put(`${Config.API.URL}/movies`, action.payload);
      return EMPTY;
    })
  );

export default updateMovie;
