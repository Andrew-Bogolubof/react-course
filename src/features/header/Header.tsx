import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { Button } from '../common/button';
import { ErrorBoundary } from '../error-boundary';
import { Button as ButtonType } from '../common/button/models';
import { Modal } from '../modal';
import { ModalLayout } from '../modal-layout';
import { Logo } from '../common/logo';
import { AddEditMovieForm } from '../add-movie-form';
import { MovieDetails } from '../movie-details';
import { useSelector } from '../../store';
import { Search } from '../search';
import { fetchMovie } from '../../store/actions/movies-actions';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMovieAddModalOpened, setIsMovieAddModalOpened] = useState(false);
  const isDetails = useRouteMatch<{ id: string }>('/film/:id');
  const movies = useSelector((state) => state.movies);
  const openModal = useCallback(() => setIsMovieAddModalOpened(true), []);
  const closeModal = useCallback(() => setIsMovieAddModalOpened(false), []);
  const returnToSearch = useCallback(() => {
    history.push('/');
  }, [history]);
  useEffect(() => {
    if (
      isDetails?.params.id &&
      !movies.find((movie) => movie.id === Number(isDetails?.params.id))
    ) {
      dispatch(fetchMovie({ id: Number(isDetails?.params.id) }));
    }
  }, [dispatch, isDetails?.params.id, movies]);

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

  const getHeaderDetails = useMemo(
    () => (movieId: number) => {
      const detailsMove = movies.find((movie) => movieId === movie.id);
      return detailsMove ? <MovieDetails movie={detailsMove} /> : <div>Loading</div>;
    },
    [movies]
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
              path="/film/:id"
              exact
              render={({ match }) => getHeaderDetails(Number(match.params.id))}
            />
            <Route path={['/', '/search/:query']} exact>
              <Search />
            </Route>
          </Switch>
        </div>
      </ErrorBoundary>
    </header>
  );
};

export default Header;
