import { MoviesActions } from '../../actions/movies-actions';
import { moviesReducer } from '../movies-reducer';

describe('Movies Reducer', () => {
  it('should correctly set array of movies on SET_MOVIES action', () => {
    const action = {
      type: MoviesActions.SET_MOVIES,
      payload: [],
    };

    const result = moviesReducer([], action);

    expect(result).toStrictEqual([]);
  });
});
