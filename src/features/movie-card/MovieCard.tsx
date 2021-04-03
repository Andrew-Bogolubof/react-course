import React, { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { Movie } from '../../models';
import { AddEditMovieForm } from '../add-movie-form';
import { Button } from '../common/button';
import { Button as ButtonType } from '../common/button/models';
import { Image } from '../common/image';
import { DeleteMovieForm } from '../delete-movie-form';
import { Modal } from '../modal';
import { ModalLayout } from '../modal-layout';
import classes from './MovieCard.module.css';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({ movie }) => {
  const [isHoverShown, setIsHoverShown] = useState(false);
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [isEditFormOpened, setIsEditFormOpened] = useState(false);
  const [isDeleteFormOpened, setIsDeleteFormOpened] = useState(false);
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setIsEditOpened(false));
  const onMouseEnter = useCallback(() => {
    setIsHoverShown(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setIsHoverShown(false);
  }, []);
  const onOpenDetails = useCallback(() => {
    setIsEditOpened(true);
  }, []);
  const openEditForm = useCallback(() => {
    setIsEditFormOpened(true);
    setIsHoverShown(false);
    setIsEditOpened(false);
  }, []);
  const openDeleteForm = useCallback(() => {
    setIsDeleteFormOpened(true);
    setIsHoverShown(false);
    setIsEditOpened(false);
  }, []);
  const closeEdit = useCallback(() => {
    setIsEditOpened(false);
  }, []);
  const closeEditForm = useCallback(() => {
    setIsEditFormOpened(false);
  }, []);
  const closeDeleteForm = useCallback(() => {
    setIsDeleteFormOpened(false);
  }, []);

  const detailsHover = (
    <button
      type="button"
      className={`btn btn-secondary ${classes.round_button}`}
      onClick={onOpenDetails}
    >
      <i className="bi bi-three-dots-vertical" />
    </button>
  );

  const editFormModal = (editMovie: Movie) =>
    isEditFormOpened && (
      <Modal>
        <ModalLayout title="Edit Movie" onCloseForm={closeEditForm}>
          <AddEditMovieForm movie={editMovie} />
        </ModalLayout>
      </Modal>
    );

  const deleteFormModal = (id: number) =>
    isDeleteFormOpened && (
      <Modal>
        <ModalLayout title="Delete Movie" onCloseForm={closeDeleteForm}>
          <DeleteMovieForm id={id} onDeleteHandler={() => {}} />
        </ModalLayout>
      </Modal>
    );

  const editHover = (
    <div className={`d-flex flex-column pt-3 pb-3 ${classes.edit_container}`} ref={popupRef}>
      <div className="align-self-end pr-3">
        <Button type={ButtonType.CloseSmall} onClickHandler={closeEdit} />
      </div>
      <button
        type="button"
        onClick={openEditForm}
        className={`pl-3 p-2 text-left h6 ${classes.edit_option}`}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={openDeleteForm}
        className={`pl-3 p-2 text-left h6 ${classes.edit_option}`}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div
      className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-4 d-flex flex-column justify-content-between ${classes.card}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHoverShown && detailsHover}
      {editFormModal(movie)}
      {isEditOpened && editHover}
      {deleteFormModal(movie.id)}
      <Image src={movie.poster_path} alt="Poster" />
      <div>
        <div className="row mt-2 mr-2 ml-2 justify-content-between align-items-center">
          <div className="h5">{movie.title}</div>
          <div className={`h6 ${classes.year}`}>{new Date(movie.release_date).getFullYear()}</div>
        </div>
        <div className="row mr-2 ml-2">
          <div className="sm text-muted text-wrap">{movie.genres.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
