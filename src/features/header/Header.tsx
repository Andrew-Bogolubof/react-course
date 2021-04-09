import React, { useCallback, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import classes from './Header.module.css';
import { Input } from '../common/forms/input';
import { Button } from '../common/button';
import { ErrorBoundary } from '../error-boundary';
import { Button as ButtonType } from '../common/button/models';
import { Modal } from '../modal';
import { ModalLayout } from '../modal-layout';
import { Logo } from '../common/logo';
import { AddEditMovieForm } from '../add-movie-form';
import { TextColor } from '../common/forms/models';
import { MovieDetails } from '../movie-details';
import { useSelector } from '../../store';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [isMovieAddModalOpened, setIsMovieAddModalOpened] = useState(false);
  const isDetails = useRouteMatch('/film/:id');
  const movies = useSelector((state) => state.movies);
  const openModal = useCallback(() => setIsMovieAddModalOpened(true), []);
  const closeModal = useCallback(() => setIsMovieAddModalOpened(false), []);
  const returnToSearch = useCallback(() => {}, []);
  const search = useCallback(() => {}, []);

  const headerSearch = (
    <>
      <div className="row">
        <div className="col-sm">
          <div className={`text-left h1 ${classes.find_movie_title}`}>Find Your Movie</div>
        </div>
      </div>
      <div className="row">
        <Input
          placeholder="What do you want to watch?"
          onChangeHandler={() => {}}
          color={TextColor.Gray}
        />
        <Button name="Search" type={ButtonType.Primary} onClick={search} />
      </div>
    </>
  );

  const addMovieButton = (
    <>
      <Button name="+ Add Movie" type={ButtonType.Secondary} onClick={openModal} />
      {isMovieAddModalOpened && (
        <Modal>
          <ModalLayout title="Add Movie" onCloseForm={closeModal}>
            <AddEditMovieForm />
          </ModalLayout>
        </Modal>
      )}
    </>
  );

  const getHeaderDetails = (movieId: number) => (
    <MovieDetails movie={movies.find((movie) => movieId === movie.id)!} />
  );

  const returnToSearchButton = (
    <Button type={ButtonType.Empty} onClick={returnToSearch}>
      <i className={`bi bi-search ${classes.icon}`} />
    </Button>
  );

  return (
    <header className={`container-fluid ${isDetails ? classes.details_header : classes.header}`}>
      <ErrorBoundary>
        <div className={`${classes.background} ${isDetails ? classes.darken_background : ''}`} />
        <div className="container-xxl">
          <div className={`container-xxl row d-flex align-items-center ${classes.add_movie}`}>
            <div className="col">
              <Logo />
            </div>
            <div className="col d-flex justify-content-end">
              {isDetails ? returnToSearchButton : addMovieButton}
            </div>
          </div>
        </div>
        <div className="container-xl container-md container-sm">
          <Switch>
            <Route
              path="/movies/:id"
              exact
              render={({ match }) => getHeaderDetails(Number(match.params.id))}
            />
            <Route path="/" exact>
              {headerSearch}
            </Route>
          </Switch>
        </div>
      </ErrorBoundary>
    </header>
  );
};

export default Header;
