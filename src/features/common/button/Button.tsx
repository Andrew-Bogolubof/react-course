import * as React from 'react';
import classes from './Button.module.css';
import { Button as ButtonType } from '../../../models/Button';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  name: string;
  type: ButtonType;
  // onClickHandler?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ name, type }) => (
  <button
    type="button"
    className={`btn btn-primary p-2 pr-5 pl-5 ml-auto ${classes[getButtonClassName(type)]}`}
  >
    {name}
  </button>
);

export default Button;
