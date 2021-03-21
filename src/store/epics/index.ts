import { combineEpics } from 'redux-observable';
// eslint-disable-next-line import/no-cycle
import fetchMovies from './fetch-movies';

export const rootEpic = combineEpics(fetchMovies);
