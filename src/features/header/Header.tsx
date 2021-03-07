import React, { useState } from 'react';
import classes from './Header.module.css';
import { Input } from '../common/input';
import { Button } from '../common/button';
import { ErrorBoundary } from '../error-boundary';
import { Button as ButtonType } from '../common/button/models';
import { Modal } from '../modal';
import { ModalLayout } from '../modal-layout';
import { Logo } from '../common/logo';
import { AddMovieForm } from '../add-movie-form';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [isMovieAddModalOpened, setIsMovieAddModalOpened] = useState(false);

  return (
    <header className={`container-fluid ${classes.header}`}>
      <ErrorBoundary>
        <div className={`${classes.background}`} />
        <div className="container-xxl">
          <div className={`container-xxl row d-flex align-items-center ${classes.add_movie}`}>
            <div className="col">
              <Logo />
            </div>
            <div className="col d-flex justify-content-end">
              <Button
                name="+ Add Movie"
                type={ButtonType.Secondary}
                onClickHandler={() => setIsMovieAddModalOpened(true)}
              />
              {isMovieAddModalOpened && (
                <Modal>
                  <ModalLayout
                    title="Add Movie"
                    onCloseForm={() => setIsMovieAddModalOpened(false)}
                  >
                    <AddMovieForm />
                  </ModalLayout>
                </Modal>
              )}
            </div>
          </div>
        </div>
        <div className="container-xl container-md container-sm">
          <div className="row">
            <div className="col-sm">
              <div className={`text-left h1 ${classes.find_movie_title}`}>Find Your Movie</div>
            </div>
          </div>
          <div className="row">
            <Input placeholder="What do you want to watch?" />
            <Button name="Search" type={ButtonType.Primary} onClickHandler={() => {}} />
          </div>
        </div>
      </ErrorBoundary>
    </header>
  );
};

export default Header;
