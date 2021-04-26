import { AppContext } from 'next/app';
import { BrowserRouter as Router, StaticRouter } from 'react-router-dom';
import React from 'react';
import classes from '../src/App.module.css';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { fetchMovies } from '../src/store/actions/movies-actions';

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
  const query = ctx.store.getState().sortingOptions;

  return resolveActions([fetchMovies(query)])(ctx);
};

export default App;
