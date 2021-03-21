import { handleActions } from 'redux-actions';
import { Movie } from '../../models';
import { MoviesActions } from '../actions/movies-actions';

export const moviesReducer = handleActions<Movie[], Movie[]>(
  {
    [MoviesActions.SET_MOVIES]: (_, action) => action.payload,
  },
  []
);
