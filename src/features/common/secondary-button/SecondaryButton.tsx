import * as React from 'react';
import PropTypes from 'prop-types';
import classes from './SecondaryButton.module.css';

export interface SecondaryButtonProps {
  name: string;
  // onClickHandler?: () => void;
}

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({ name }) => (
  <button type="button" className={`btn btn-primary p-2 pr-3 pl-3 ml-auto ${classes.button}`}>
    {name}
  </button>
);

export default SecondaryButton;

// TODO: delete after merging components-1 task, because it is redundant
SecondaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
