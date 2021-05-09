import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore as createStoreRedux,
  Store,
} from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: AppState, action: any): AppState => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

const createAppStore = () => {
  // const epicMiddleware = createEpicMiddleware();
  const makeStore = (context: Context) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // createStoreRedux(reducer as any, applyMiddleware(epicMiddleware));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createStoreRedux(reducer as any);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper = createWrapper<Store<AppState>>(makeStore as any, { debug: true });
  // epicMiddleware.run(rootEpic);

  return wrapper;
};

export { createAppStore, useSelector };
