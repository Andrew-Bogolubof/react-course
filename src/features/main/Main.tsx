import React, { useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import classes from './Main.module.css';
import { MovieCard } from '../movie-card';

// TODO: remove mock movies and genres
import moviesList from '../../mocks/movies.json';

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
  const [movies] = useState(moviesList.slice(1, 7));
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  return (
    <main className={`container-fluid ${classes.main}`}>
      <ErrorBoundary>
        <div className="container-xl">
          <div className={`row d-flex align-items-center ${classes.movies_sort}`}>
            <div className={`col-sm p-3 d-flex ${classes.sort_row}`}>
              {genres.map((genre) => (
                <div key={genre} className={`text-center mr-2 ${classes.genre}`}>
                  {genre}
                  <div className={`${genre === selectedGenre ? classes.genre_selected : ''}`} />
                </div>
              ))}
            </div>
            <div className="col-sm d-flex justify-content-end align-items-center">
              <div className="sm text-muted">Sort By</div>
              <div className="col-smd">
                <div className="dropdown">
                  <button
                    className={`btn dropdown-toggle ${classes.dropdown_button}`}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Option
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
                </div>
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
