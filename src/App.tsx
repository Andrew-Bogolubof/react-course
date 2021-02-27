import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import { Header } from './features/header';
import { Main } from './features/main';
import { Footer } from './features/footer';

function App() {
  return (
    <div className={`${classes.container}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
