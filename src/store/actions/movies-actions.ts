import { createAction } from 'redux-actions';
import { FetchMovieQuery, Movie } from '../../models';

export enum MoviesActions {
  SET_MOVIES = 'SET_MOVIES',
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIE = 'FETCH_MOVIE',
  CREATE_MOVIE = 'CREATE_MOVIE',
  UPDATE_MOVIE = 'UPDATE_MOVIE',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  DELETE_MOVIE = 'DELETE_MOVIE',
}

export const setMovies = createAction<Movie[]>(MoviesActions.SET_MOVIES);
export type SetMovies = ReturnType<typeof setMovies>;

export const fetchMovies = createAction<FetchMovieQuery>(MoviesActions.FETCH_MOVIES);
export type FetchMovies = ReturnType<typeof fetchMovies>;

export const fetchMovie = createAction<{ id: number }>(MoviesActions.FETCH_MOVIE);
export type FetchMovie = ReturnType<typeof fetchMovie>;

export const createMovie = createAction<
  Pick<Movie, 'title' | 'release_date' | 'poster_path' | 'genres' | 'overview' | 'runtime'>
>(MoviesActions.CREATE_MOVIE);
export type CreateMovie = ReturnType<typeof createMovie>;

export const updateMovie = createAction<Omit<Partial<Movie>, 'id'> & { id: number }>(
  MoviesActions.UPDATE_MOVIE
);
export type UpdateMovie = ReturnType<typeof updateMovie>;

export const deleteMovie = createAction<{ id: Movie['id'] }>(MoviesActions.DELETE_MOVIE);
export type DeleteMovie = ReturnType<typeof deleteMovie>;
