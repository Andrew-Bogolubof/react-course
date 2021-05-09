import { AppContext } from 'next/app';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import classes from '../../src/App.module.css';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Footer } from '../../components/footer';
import { fetchMovies } from '../../src/store/actions/movies-actions';
import { setSearchString } from '../../src/store/actions/sorting-actions';

const { resolveActions } = require('next-redux-observable');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: React.FC & { getInitialProps: (ctx: AppContext['ctx']) => any } = () => (
  <StaticRouter>
    <div className={`${classes.container}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  </StaticRouter>
);

App.getInitialProps = async (ctx: AppContext['ctx']) => {
  const searchQuery = ctx.query.query as string;
  ctx.store.dispatch(setSearchString({ search: searchQuery }));
  const query = ctx.store.getState().sortingOptions;

  return resolveActions([fetchMovies({ ...query, search: searchQuery })])(ctx);
};

export default App;
