/* eslint-disable import/no-cycle */
import { combineEpics } from 'redux-observable';
import fetchMovies from './fetch-movies';
import createMovie from './create-movie';
import updateMovie from './update-movie';
import deleteMovie from './delete-movie';
import fetchMovie from './fetch-movie';

export const rootEpic = combineEpics(
  fetchMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  fetchMovie
);
