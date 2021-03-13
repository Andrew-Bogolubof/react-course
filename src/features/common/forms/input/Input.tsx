import * as React from 'react';
import { TextColor } from '../models';
import classes from './Input.module.css';

export interface InputProps {
  placeholder: string;
  htmlFor?: string;
  value?: string | number;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: TextColor;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
  color,
}) => (
  <div className="col input-group">
    <input
      type="text"
      id={htmlFor}
      className={`form-control ${classes.input} ${color ? classes[color] : classes.white}`}
      placeholder={placeholder}
      aria-label="Server"
      value={value}
      onChange={onChangeHandler}
    />
  </div>
);

export default Input;
