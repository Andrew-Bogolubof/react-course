import * as React from 'react';
import classes from './DateInput.module.css';

export interface DateInputProps {
  placeholder: string;
  htmlFor?: string;
  value?: string;
  onChangeHandler: () => void;
}

const DateInput: React.FunctionComponent<DateInputProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
}) => (
  <div className="col input-group">
    <input
      type="date"
      id={htmlFor}
      className={`form-control ${classes.input}`}
      placeholder={placeholder}
      aria-label="Server"
      value={value}
      onChange={onChangeHandler}
    />
  </div>
);

export default DateInput;
