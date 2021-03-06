export enum SortOrder {
  DESC = 'desc',
  ASC = 'asc',
}
export enum SearchBy {
  TITLE = 'title',
  GENRES = 'genres',
}

export enum SortBy {
  TITLE = 'title',
  RATING = 'rating',
  RELEASE_DATE = 'release date',
}

export enum SortByField {
  TITLE = 'title',
  RATING = 'vote_count',
  RELEASE_DATE = 'release_date',
}

export type FetchMovieQuery = {
  sortBy?: SortByField;
  sortOrder?: SortOrder;
  search?: string;
  searchBy?: SearchBy;
  filter?: string[];
  offset?: string;
  limit?: string;
};
