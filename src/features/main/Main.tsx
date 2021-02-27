import * as React from 'react';
import { ErrorBoundary } from '../error-boundary';
import classes from './Main.module.css';

export interface MainProps {}

const Main: React.FunctionComponent<MainProps> = () => (
  <main className={`container-fluid ${classes.main}`}>
    <ErrorBoundary>
      <div className="container-xl">Container with results sort</div>
      <div className="container-xl">Movies amount</div>
      <div className="container-xl">Movies grid</div>
    </ErrorBoundary>
  </main>
);

export default Main;
