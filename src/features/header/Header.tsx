import React, { useCallback, useState } from 'react';
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
// TODO: remove mock movies and genres
import moviesList from '../../mocks/movies.json';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [isMovieAddModalOpened, setIsMovieAddModalOpened] = useState(false);
  // TODO: delete when routing is turned on
  const [isDetails] = useState(false);
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
        <Button name="Search" type={ButtonType.Primary} onClickHandler={search} />
      </div>
    </>
  );

  const addMovieButton = (
    <>
      <Button name="+ Add Movie" type={ButtonType.Secondary} onClickHandler={openModal} />
      {isMovieAddModalOpened && (
        <Modal>
          <ModalLayout title="Add Movie" onCloseForm={closeModal}>
            <AddEditMovieForm />
          </ModalLayout>
        </Modal>
      )}
    </>
  );

  const headerDetails = <MovieDetails movie={moviesList[3]} />;

  const returnToSearchButton = (
    <Button type={ButtonType.Empty} onClickHandler={returnToSearch}>
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
          {isDetails ? headerDetails : headerSearch}
        </div>
      </ErrorBoundary>
    </header>
  );
};

export default Header;
