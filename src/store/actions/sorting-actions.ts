import { createAction } from 'redux-actions';

export enum SortingActions {
  SET_GENRE = 'SET_GENRE',
  SET_ORDER = 'SET_ORDER',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_SEARCH_STRING = 'SET_SEARCH_STRING',
  SET_LIMIT = 'SET_LIMIT',
  SET_OFFSET = 'SET_OFFSET',
  SEARCH = 'SEARCH',
}

export const setSortBy = createAction<{ sortBy: string }>(SortingActions.SET_SORT_BY);
export type SetSortBy = ReturnType<typeof setSortBy>;
