import * as React from 'react';
import { Movie } from '../../models';
import notFoundImage from '../../assets/image-not-found.png';
import classes from './MovieCard.module.css';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  movie: { poster_path, title, genres, release_date },
}) => (
  <div className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-4 ${classes.card}`}>
    <img src={poster_path || notFoundImage} className="img-fluid" alt="Poster" />
    <div className="row mt-2 mr-2 ml-2 justify-content-between align-items-center">
      <div className="h5">{title}</div>
      <div className={`h6 ${classes.year}`}>{new Date(release_date).getFullYear()}</div>
    </div>
    <div className="row mr-2 ml-2">
      <div className="sm text-muted text-wrap">{genres.join(', ')}</div>
    </div>
  </div>
);

export default MovieCard;
