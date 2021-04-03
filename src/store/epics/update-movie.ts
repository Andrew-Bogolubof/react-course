import axios from 'axios';
import { EMPTY, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Config } from '../../config';
import { UpdateMovie, MoviesActions } from '../actions/movies-actions';
// eslint-disable-next-line import/no-cycle
import { AppState } from '..';

type Input = UpdateMovie;

const updateMovie: Epic<Input, Input, AppState> = (action$) =>
  action$.pipe(
    ofType<Input>(MoviesActions.UPDATE_MOVIE),
    mergeMap((action: UpdateMovie) => {
      of(axios.put(`${Config.API.URL}/movies`, action.payload)).subscribe();
      return EMPTY;
    })
  );

export default updateMovie;
