import React from 'react';
import classes from './DeleteMovieForm.module.css';
import { Button as ButtonType } from '../common/button/models';
import { Button } from '../common/button';

export interface DeleteMovieFormProps {
  id: number;
  onDeleteHandler: (id: number) => void;
}

const DeleteMovieForm: React.FunctionComponent<DeleteMovieFormProps> = ({
  onDeleteHandler,
  id,
}) => (
  <>
    <div className="modal-body pl-4 pr-4">
      <p className="ml-4 h-6">Are you sure you want to delete this movie</p>
    </div>
    <div
      className={`modal-footer d-flex justify-content-end align-items-center ${classes.modal_footer}`}
    >
      <Button type={ButtonType.Primary} name="Submit" onClick={() => onDeleteHandler(id)} />
    </div>
  </>
);

export default DeleteMovieForm;
