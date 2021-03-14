import * as React from 'react';
import classes from './Button.module.css';
import { Button as ButtonType } from './models';
import { getButtonClassName } from './utils';

export interface ButtonProps {
  name?: string;
  type: ButtonType;
  onClickHandler: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ name, type, onClickHandler, children }) => {
  if (type === ButtonType.Close || type === ButtonType.CloseSmall) {
    return (
      <button
        type="button"
        className={`btn z-10 ${classes[getButtonClassName(type)]}`}
        onClick={() => onClickHandler()}
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
        onClick={() => onClickHandler()}
      >
        {children} {name}
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
