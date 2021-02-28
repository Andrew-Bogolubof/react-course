import * as React from 'react';
import classes from './SecondaryButton.module.css';

export interface SecondaryButtonProps {
  name: string;
  // TODO: make not optional
  onClickHandler?: () => void;
}

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({ name }) => (
  <button type="button" className={`btn btn-primary p-2 pr-3 pl-3 ml-auto ${classes.button}`}>
    {name}
  </button>
);

export default SecondaryButton;
