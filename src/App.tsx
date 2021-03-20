import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import classes from './App.module.css';
import { Header } from './features/header';
import { Main } from './features/main';
import { Footer } from './features/footer';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className={`${classes.container}`}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
