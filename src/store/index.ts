import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { moviesReducer } from './reducer';

const reducers = {
  movies: moviesReducer,
};

const rootReducer = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware({
  dependencies: rootEpic,
});

const middlewares = [epicMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
