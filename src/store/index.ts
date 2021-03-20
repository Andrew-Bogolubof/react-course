import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { moviesReducer } from './reducer';

const reducers = {
  movies: moviesReducer,
};

export type AppState = {
  movies: ReturnType<typeof moviesReducer>;
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
