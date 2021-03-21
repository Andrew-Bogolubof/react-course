import { Movie } from './Movie';

export enum SortOrder {
  DESC = 'desc',
  ASC = 'asc',
}
export enum SortBy {
  TITLE = 'title',
  GENRES = 'genres',
}

export type FetchMovieQuery = {
  sortBy?: keyof Movie;
  sortOrder?: SortOrder;
  search?: string;
  searchBy?: SortBy;
  filter?: string[];
  offset?: string;
  limit?: string;
};
