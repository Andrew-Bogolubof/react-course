import * as React from 'react';
import classes from './Button.module.css';
import { Button as ButtonType } from './models';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  name?: string;
  invalid?: boolean;
  type: ButtonType;
  onClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  name,
  type,
  onClick,
  children,
  invalid,
}) => {
  if (type === ButtonType.Close || type === ButtonType.CloseSmall) {
    return (
      <button
        type="button"
        className={`btn z-10 ${classes[getButtonClassName(type)]}`}
        onClick={() => onClick()}
      >
        <i className={`bi bi-x ${type === ButtonType.Close ? classes.icon : classes.icon_small}`} />
      </button>
    );
  }
  if (type === ButtonType.Empty) {
    return (
      <button
        type="button"
        className={`btn z-10 ${classes[getButtonClassName(type)]}`}
        onClick={() => onClick()}
      >
        {children} {name}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`btn btn-primary p-2 pr-5 pl-5 z-10 ${classes[getButtonClassName(type)]} ${
        invalid && classes.invalid
      }`}
      onClick={() => !invalid && onClick()}
    >
      {name}
    </button>
  );
};

export default Button;
