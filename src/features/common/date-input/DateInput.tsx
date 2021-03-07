import * as React from 'react';
import classes from './DateInput.module.css';

export interface DateInputProps {
  placeholder: string;
  htmlFor?: string;
  // onChangeHandler?: () => void;
}

const DateInput: React.FunctionComponent<DateInputProps> = ({ placeholder, htmlFor }) => (
  <div className="col input-group">
    <input
      type="date"
      id={htmlFor}
      className={`form-control ${classes.input}`}
      placeholder={placeholder}
      aria-label="Server"
    />
  </div>
);

export default DateInput;
