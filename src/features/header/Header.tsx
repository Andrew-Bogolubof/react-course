import * as React from 'react';
import { Input } from '../common/input';
import { PrimaryButton } from '../common/primary-button';
import { SecondaryButton } from '../common/secondary-button';
import { ErrorBoundary } from '../error-boundary';
import classes from './Header.module.css';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <header className={`container-fluid ${classes.header}`}>
    <ErrorBoundary>
      <div className={`${classes.background}`} />
      <div className="container-xxl">
        <div className={`container-xxl row d-flex align-items-center ${classes.add_movie}`}>
          <div className="col">
            <div className={`text-left h4 ${classes.logo_text}`}>
              <b>netflix</b>roulette
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <SecondaryButton name="+ Add Movie" />
          </div>
        </div>
      </div>
      <div className="container-xl container-md container-sm">
        <div className="row">
          <div className="col-sm">
            <div className={`text-left h1 ${classes.find_movie_title}`}>Find Your Movie</div>
          </div>
        </div>
        <div className="row">
          <Input placeholder="What do you want to watch?" />
          <PrimaryButton name="Search" />
        </div>
      </div>
    </ErrorBoundary>
  </header>
);

export default Header;
