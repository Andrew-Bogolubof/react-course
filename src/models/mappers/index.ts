import { SortBy, SortByField } from '../FetchMovie';

export const mapSortByToSortByField = (sortBy: SortBy | undefined): SortByField => {
  switch (sortBy) {
    case SortBy.RATING:
      return SortByField.RATING;
    case SortBy.RELEASE_DATE:
      return SortByField.RELEASE_DATE;
    case SortBy.TITLE:
      return SortByField.TITLE;
    default:
      return SortByField.TITLE;
  }
};

export const mapSortByFieldToSortBy = (sortBy: SortByField | undefined): SortBy => {
  switch (sortBy) {
    case SortByField.RATING:
      return SortBy.RATING;
    case SortByField.RELEASE_DATE:
      return SortBy.RELEASE_DATE;
    case SortByField.TITLE:
      return SortBy.TITLE;
    default:
      return SortBy.TITLE;
  }
};
