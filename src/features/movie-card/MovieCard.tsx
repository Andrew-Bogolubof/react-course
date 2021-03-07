import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { Movie } from '../../models';
import { Button } from '../common/button';
import { Button as ButtonType } from '../common/button/models';
import { Image } from '../common/image';
import classes from './MovieCard.module.css';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  movie: { poster_path, title, genres, release_date },
}) => {
  const [isHoverShown, setIsHoverShown] = useState(false);
  const [isEditOpened, setIsEditOpened] = useState(false);
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setIsEditOpened(false));
  const onMouseEnter = () => {
    setIsHoverShown(true);
  };
  const onMouseLeave = () => {
    setIsHoverShown(false);
  };
  const onOpenDetails = () => {
    setIsEditOpened(true);
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

  const editHover = (
    <div className={`d-flex flex-column pt-3 pb-3 ${classes.edit_container}`} ref={popupRef}>
      <div className="align-self-end pr-3">
        <Button type={ButtonType.CloseSmall} onClickHandler={() => setIsEditOpened(false)} />
      </div>
      <div className={`pl-3 p-2 ${classes.edit_option}`}>Edit</div>
      <div className={`pl-3 p-2 ${classes.edit_option}`}>Delete</div>
    </div>
  );

  return (
    <div
      className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-4 d-flex flex-column justify-content-between ${classes.card}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHoverShown && detailsHover}
      {isEditOpened && editHover}

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
