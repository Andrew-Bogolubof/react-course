import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from '../error-boundary';
import classes from './Main.module.css';
import { MovieCard } from '../movie-card';

// TODO: remove mock movies and genres
import moviesList from '../../mocks/movies.json';
import { DropDown } from '../common/toggle';
import { SortLineList } from '../common/sort-line-list';
import { useSelector } from '../../store';
import { fetchMovies } from '../../store/actions/movies-actions';
import { SearchBy, SortBy } from '../../models';
import { setGenre, setSortBy } from '../../store/actions/sorting-actions';
import { mapSortByFieldToSortBy } from '../../models/mappers';

const genres = Array.from(
  moviesList
    .reduce<Set<string>>((acc, movie) => {
      movie.genres.forEach((genre) => acc.add(genre));
      return acc;
    }, new Set())
    .values()
).slice(0, 6);

export interface MainProps {}

const Main: React.FunctionComponent<MainProps> = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const query = useSelector((state) => state.sortingOptions);
  const option = useSelector((state) => state.sortingOptions.sortBy);
  const genreItem = useSelector((state) =>
    state.sortingOptions.searchBy === SearchBy.GENRES ? state.sortingOptions.filter : ''
  );

  useEffect(() => {
    dispatch(fetchMovies(query));
  }, [dispatch, query]);

  const selectSortBy = useCallback(
    (selectedOption: string) => {
      dispatch(setSortBy({ sortBy: selectedOption }));
    },
    [dispatch]
  );

  const selectGenre = useCallback(
    (selectedGenre: string) => {
      dispatch(setGenre({ genre: selectedGenre }));
    },
    [dispatch]
  );
  return (
    <main className={`container-fluid ${classes.main}`}>
      <ErrorBoundary>
        <div className="container-xl">
          <div className={`row d-flex align-items-center ${classes.movies_sort}`}>
            <div className={`col-sm p-3 d-flex ${classes.sort_row}`}>
              <SortLineList
                list={['All', ...genres]}
                item={genreItem ? genreItem[0] ?? 'All' : 'All'}
                onClickHandler={selectGenre}
              />
            </div>
            <div className="col-sm d-flex justify-content-end align-items-center">
              <div className="sm text-muted">Sort By</div>
              <div className="col-smd">
                <DropDown
                  option={mapSortByFieldToSortBy(option) as string}
                  options={Object.values(SortBy)}
                  onClickHandler={selectSortBy}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl p-2">
          <b>{movies.length}</b> movies found
        </div>
        <div className="container-xl">
          <div className="row">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </ErrorBoundary>
    </main>
  );
};

export default Main;
