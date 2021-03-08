import * as React from 'react';
import classes from './Input.module.css';

export interface InputProps {
  placeholder: string;
  htmlFor?: string;
  value?: string | number;
  onChangeHandler: () => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
}) => (
  <div className="col input-group">
    <input
      type="text"
      id={htmlFor}
      className={`form-control ${classes.input}`}
      placeholder={placeholder}
      aria-label="Server"
      value={value}
      onChange={onChangeHandler}
    />
  </div>
);

export default Input;
