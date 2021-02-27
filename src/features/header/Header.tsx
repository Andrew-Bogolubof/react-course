import * as React from 'react';
import { ErrorBoundary } from '../error-boundary';
import classes from './Header.module.css';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <header className={`container-fluid ${classes.header}`}>
    <ErrorBoundary>
      <div className="container-xl">
        <div className={`row d-flex align-items-center ${classes.add_movie}`}>
          <div className="col">
            <div className={`text-left h4 ${classes.logo_text}`}>
              <b>netflix</b>roulette
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-secondary">
              Add Movie
            </button>
          </div>
        </div>
      </div>
      <div className="container-lg container-sm">
        <div className="row">
          <div className="col-sm">
            <div className={`text-left h1 ${classes.find_movie_title}`}>Find Your Movie</div>
          </div>
        </div>
        <div className="row">
          <div className="col input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What do you want to watch?"
              aria-label="Server"
            />
          </div>
          <button type="button" className="btn btn-primary ml-auto">
            Search
          </button>
        </div>
      </div>
    </ErrorBoundary>
  </header>
);

export default Header;
