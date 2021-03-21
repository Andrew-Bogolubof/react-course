import { createAction } from 'redux-actions';
import { FetchMovieQuery, Movie } from '../../models';

export enum MoviesActions {
  SET_MOVIES = 'SET_MOVIES',
  FETCH_MOVIES = 'FETCH_MOVIES',
}

export const setMovies = createAction<Movie[]>(MoviesActions.SET_MOVIES);
export type SetMovies = ReturnType<typeof setMovies>;

export const fetchMovies = createAction<FetchMovieQuery>(MoviesActions.FETCH_MOVIES);
export type FetchMovies = ReturnType<typeof fetchMovies>;
