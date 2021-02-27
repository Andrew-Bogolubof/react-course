import * as React from 'react';
import { ErrorBoundary } from '../error-boundary';
import classes from './Main.module.css';
import { MovieCard } from '../movie-card';

import movies from '../../mocks/movies.json';

export interface MainProps {}

const Main: React.FunctionComponent<MainProps> = () => (
  <main className={`container-fluid ${classes.main}`}>
    <ErrorBoundary>
      <div className="container-xl">
        <div className={`row d-flex align-items-center ${classes.movies_sort}`}>
          <div className="col-sm">Genres Sort</div>
          <div className="col-sm">Sort By</div>
        </div>
      </div>
      <div className="container-xl">Movies amount</div>
      <div className="container-xl">
        <div className="row">
          {movies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  </main>
);

export default Main;
