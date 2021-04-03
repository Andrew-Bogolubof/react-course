import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// eslint-disable-next-line import/no-cycle
import { rootEpic } from './epics';
import { moviesReducer } from './reducers/movies-reducer';
import { sortingReducer } from './reducers/sorting-reducer';

const reducers = {
  movies: moviesReducer,
  sortingOptions: sortingReducer,
};

export type AppState = {
  movies: ReturnType<typeof moviesReducer>;
  sortingOptions: ReturnType<typeof sortingReducer>;
};

const rootReducer = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// TODO: fix as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
epicMiddleware.run(rootEpic as any);

const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export { store, useSelector };
