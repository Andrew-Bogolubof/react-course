import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import classes from './Search.module.css';
import { setSearchString } from '../../store/actions/sorting-actions';
import { Input } from '../common/forms/input';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';
import { TextColor } from '../common/forms/models';
import { useSelector } from '../../store';
import { fetchMovies } from '../../store/actions/movies-actions';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchMatch = useRouteMatch<{ query: string }>('/search/:query');
  const [searchQuery, setSearchQuery] = useState('');
  const sortOptions = useSelector((state) => state.sortingOptions);
  const search = useCallback(() => {
    dispatch(setSearchString({ search: searchQuery }));
    history.push(`/search/${searchQuery}`);
  }, [dispatch, history, searchQuery]);

  useEffect(() => {
    if (searchMatch?.params.query) {
      dispatch(setSearchString({ search: searchMatch?.params.query }));
    }
  }, [searchMatch?.params.query, dispatch]);

  useEffect(() => {
    if (sortOptions.search) {
      dispatch(fetchMovies(sortOptions));
    }
  }, [sortOptions, dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <div className={`text-left h1 ${classes.find_movie_title}`}>Find Your Movie</div>
        </div>
      </div>
      <div className="row">
        <Input
          placeholder="What do you want to watch?"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
          }}
          value={searchQuery}
          initialValue={searchMatch?.params.query}
          color={TextColor.Gray}
        />
        <Button name="Search" type={ButtonType.Primary} onClick={search} />
      </div>
    </>
  );
};

export default Search;
