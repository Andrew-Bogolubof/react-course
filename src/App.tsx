import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import classes from './App.module.css';
import { Header } from './features/header';
import { Main } from './features/main';
import { Footer } from './features/footer';
import { store } from './store';
import { NotFound } from './features/not-found';

function App() {
  return (
    <Provider store={store}>
      <div className={`${classes.container}`}>
        <Router>
          <Switch>
            <Route exact path={['/', '/film/:id', '/search/:query']}>
              <Header />
              <Main />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
