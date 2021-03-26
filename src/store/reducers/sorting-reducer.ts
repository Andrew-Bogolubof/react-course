import { handleActions } from 'redux-actions';
import { FetchMovieQuery, SearchBy, SortBy, SortByField, SortOrder } from '../../models';
import { mapSortByToSortByField } from '../../models/mappers';
import { SortingActions } from '../actions/sorting-actions';

export const sortingReducer = handleActions<
  FetchMovieQuery,
  Omit<FetchMovieQuery, 'sortBy' | 'genre'> & { sortBy: SortBy; genre: string }
>(
  {
    [SortingActions.SET_GENRE]: (state, action) => {
      if (action.payload.genre === 'All') {
        return {
          ...state,
          filter: undefined,
          searchBy: SearchBy.TITLE,
        };
      }
      return {
        ...state,
        filter: action.payload.genre ? [action.payload.genre] : undefined,
        searchBy: action.payload.genre ? SearchBy.GENRES : SearchBy.TITLE,
      };
    },
    [SortingActions.SET_ORDER]: (state, action) => ({
      ...state,
      sortOrder: action.payload.sortOrder ?? SortOrder.ASC,
    }),
    [SortingActions.SET_SEARCH_STRING]: (state, action) => ({
      ...state,
      search: action.payload.search ?? '',
    }),
    [SortingActions.SET_SORT_BY]: (state, action) => ({
      ...state,
      sortBy: mapSortByToSortByField(action.payload.sortBy),
    }),
    [SortingActions.SET_LIMIT]: (state, action) => ({
      ...state,
      limit: action.payload.limit ?? '6',
    }),
    [SortingActions.SET_OFFSET]: (state, action) => ({
      ...state,
      offset: action.payload.offset ?? '0',
    }),
  },
  {
    sortBy: SortByField.TITLE,
    sortOrder: SortOrder.ASC,
    search: '',
    searchBy: SearchBy.TITLE,
    filter: [],
    offset: '0',
    limit: '6',
  }
);
