import { Epic, ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Config } from '../../config';
import { CreateMovie, MoviesActions } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = CreateMovie;

const createMovie: Epic<Input, Input, AppState> = (action$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.CREATE_MOVIE),
    mergeMap((action: CreateMovie) => {
      ajax.post(`${Config.API.URL}/movies`, action.payload);
      return EMPTY;
    })
  );

export default createMovie;
