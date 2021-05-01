import { Movie } from '../../../models';
import { createMovie, deleteMovie, fetchMovies, setMovies, updateMovie } from '../movies-actions';
import { mockMovie, mockQuery } from './fixtures';

describe('Movies actions', () => {
  it('should correctly create setMovies action', () => {
    const movies = [] as Movie[];

    const result = setMovies(movies);

    expect(result).toMatchSnapshot();
  });

  it('should correctly create createMovie action', () => {
    const movie = mockMovie;

    const result = createMovie(movie);

    expect(result).toMatchSnapshot();
  });

  it('should correctly create updateMovie action', () => {
    const movie = mockMovie;

    const result = updateMovie(movie);

    expect(result).toMatchSnapshot();
  });

  it('should correctly create deleteMovie action', () => {
    const id = { id: 1 };

    const result = deleteMovie(id);

    expect(result).toMatchSnapshot();
  });

  it('should correctly create fetchMovies action', () => {
    const result = fetchMovies(mockQuery);

    expect(result).toMatchSnapshot();
  });
});
