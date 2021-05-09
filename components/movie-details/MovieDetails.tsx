import React from 'react';
import classes from './MovieDetails.module.css';
import { Movie } from '../../src/models';
import { Image } from '../common/image';

export interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FunctionComponent<MovieDetailsProps> = ({ movie }) => (
  <section className={`d-flex col pb-5 pt-3 ${classes.container}`}>
    <div className={`col-4 ${classes.image}`}>
      <Image src={movie.poster_path} alt="Poster" />
    </div>
    <div className="col-8 d-flex flex-column pl-5">
      <div className="row">
        <p className="display-4">{movie.title}</p>
        <div className={`ml-3 d-flex justify-content-center align-items-center ${classes.rating}`}>
          {movie.vote_average}
        </div>
      </div>
      <p className="row">{movie.tagline}</p>
      <div className={`row ${classes.emphasized_info}`}>
        <p className="display-5">{movie.release_date}</p>
        <p className="display-5 ml-4">{movie.runtime} min</p>
      </div>
      <p className="row">{movie.overview}</p>
    </div>
  </section>
);

export default MovieDetails;
