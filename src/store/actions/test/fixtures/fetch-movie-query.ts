import { SearchBy, SortByField, SortOrder } from '../../../../models';

const query = {
  sortBy: SortByField.RATING,
  sortOrder: SortOrder.DESC,
  search: 'My Search',
  searchBy: SearchBy.TITLE,
  filter: [],
  offset: '6',
  limit: '6',
};

export default query;
