import { createAction } from 'redux-actions';
import { Movie } from '../models';

export enum RootActions {
  SET_MOVIES = 'SET_MOVIES',
  FETCH_MOVIES = 'FETCH_MOVIES',
}

export const setMovies = createAction<Movie[]>(RootActions.SET_MOVIES);
export type SetMovies = ReturnType<typeof setMovies>;

export const fetchMovies = createAction<unknown>(RootActions.FETCH_MOVIES);
export type FetchMovies = ReturnType<typeof fetchMovies>;
