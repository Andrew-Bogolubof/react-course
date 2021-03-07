import * as React from 'react';
import classes from './Button.module.css';
import { Button as ButtonType } from './models';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  name?: string;
  type: ButtonType;
  onClickHandler: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ name, type, onClickHandler }) => {
  if (type === ButtonType.Close) {
    return (
      <button
        type="button"
        className={`btn z-10 ${classes[getButtonClassName(type)]}`}
        onClick={() => onClickHandler()}
      >
        <i className={`bi bi-x ${classes.icon}`} />
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`btn btn-primary p-2 pr-5 pl-5 z-10 ${classes[getButtonClassName(type)]}`}
      onClick={() => onClickHandler()}
    >
      {name}
    </button>
  );
};

export default Button;
