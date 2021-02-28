import * as React from 'react';
import classes from './PrimaryButton.module.css';

export interface PrimaryButtonProps {
  name: string;
  // TODO: make not optional
  onClickHandler?: () => void;
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({ name }) => (
  <button type="button" className={`btn btn-primary p-2 pr-5 pl-5 ml-auto ${classes.button}`}>
    {name}
  </button>
);

export default PrimaryButton;
