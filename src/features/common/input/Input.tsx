import * as React from 'react';
import PropTypes from 'prop-types';
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

// TODO: delete after merging components-1 task, because it is redundant
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
