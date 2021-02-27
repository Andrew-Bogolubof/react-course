import * as React from 'react';
import { ErrorBoundary } from '../error-boundary';
import classes from './Header.module.css';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <header className={`container-fluid ${classes.header}`}>
    <ErrorBoundary>
      <div className="container-xl">Container with logo and add movie</div>
      <div className="container-xl">Container with search</div>
    </ErrorBoundary>
  </header>
);

export default Header;
