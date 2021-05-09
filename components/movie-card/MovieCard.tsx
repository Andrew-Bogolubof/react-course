import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useClickOutside } from '../../src/hooks';
import { Movie } from '../../src/models';
import { deleteMovie } from '../../src/store/actions/movies-actions';
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
  const dispatch = useDispatch();
  const router = useRouter();
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
  const onDeleteMovie = useCallback(
    (id) => {
      dispatch(deleteMovie({ id }));
    },
    [dispatch]
  );
  const openMovieDetails = () => {
    router.push(`/film/${movie.id}`);
  };

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
          <AddEditMovieForm movie={editMovie} isUpdate />
        </ModalLayout>
      </Modal>
    );

  const deleteFormModal = (id: number) =>
    isDeleteFormOpened && (
      <Modal>
        <ModalLayout title="Delete Movie" onCloseForm={closeDeleteForm}>
          <DeleteMovieForm id={id} onDeleteHandler={onDeleteMovie} />
        </ModalLayout>
      </Modal>
    );

  const editHover = (
    <div className={`d-flex flex-column pt-3 pb-3 ${classes.edit_container}`} ref={popupRef}>
      <div className="align-self-end pr-3">
        <Button type={ButtonType.CloseSmall} onClick={closeEdit} />
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
    <button
      className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-4 d-flex flex-column justify-content-between ${classes.card}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={openMovieDetails}
      type="button"
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
    </button>
  );
};

export default MovieCard;
