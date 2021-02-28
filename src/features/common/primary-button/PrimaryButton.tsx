import * as React from 'react';
import PropTypes from 'prop-types';
import classes from './PrimaryButton.module.css';

export interface PrimaryButtonProps {
  name: string;
  // onClickHandler?: () => void;
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({ name }) => (
  <button type="button" className={`btn btn-primary p-2 pr-5 pl-5 ml-auto ${classes.button}`}>
    {name}
  </button>
);

export default PrimaryButton;

// TODO: delete after merging components-1 task, because it is redundant
PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
