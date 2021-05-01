import { handleActions } from 'redux-actions';
import { Movie } from '../../models';
import { MoviesActions } from '../actions/movies-actions';
import { SortingActions } from '../actions/sorting-actions';

export const moviesReducer = handleActions<Movie[], Movie[]>(
  {
    [MoviesActions.SET_MOVIES]: (_, action) =>
      Array.from(
        action.payload
          .reduce((acc, movie) => {
            if (acc.has(movie.id)) {
              return acc;
            }
            acc.set(movie.id, movie);

            return acc;
          }, new Map<number, Movie>())
          .values()
      ),
    [SortingActions.SET_SEARCH_STRING]: () => [],
  },
  []
);
