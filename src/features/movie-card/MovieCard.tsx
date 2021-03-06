import React, { useState } from 'react';
import { Movie } from '../../models';
import { Image } from '../common/image';
import classes from './MovieCard.module.css';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  movie: { poster_path, title, genres, release_date },
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onMouseEnter = () => {
    setIsEditOpen(true);
  };
  const onMouseLeave = () => {
    setIsEditOpen(false);
  };

  const editHover = (
    <button type="button" className={`btn btn-secondary ${classes.round_button}`}>
      <i className="bi bi-three-dots-vertical" />
    </button>
  );

  return (
    <div
      className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-4 d-flex flex-column justify-content-between ${classes.card}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isEditOpen && editHover}

      <Image src={poster_path} alt="Poster" />
      <div>
        <div className="row mt-2 mr-2 ml-2 justify-content-between align-items-center">
          <div className="h5">{title}</div>
          <div className={`h6 ${classes.year}`}>{new Date(release_date).getFullYear()}</div>
        </div>
        <div className="row mr-2 ml-2">
          <div className="sm text-muted text-wrap">{genres.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
