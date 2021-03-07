import * as React from 'react';
import classes from './Input.module.css';

export interface InputProps {
  placeholder: string;
  // onChangeHandler?: () => void;
}

const Input: React.FunctionComponent<InputProps> = ({ placeholder }) => (
  <div className="col input-group">
    <input
      type="text"
      className={`form-control ${classes.input}`}
      placeholder={placeholder}
      aria-label="Server"
    />
  </div>
);

export default Input;
