import { handleActions } from 'redux-actions';
import { Movie } from '../models';
import { RootActions } from './actions';

export const moviesReducer = handleActions<Movie[], Movie[]>(
  {
    [RootActions.SET_MOVIES]: (_, action) => action.payload,
  },
  []
);
