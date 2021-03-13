import * as React from 'react';
import { TextColor } from '../models';
import classes from './DateInput.module.css';

export interface DateInputProps {
  placeholder: string;
  htmlFor?: string;
  value?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: TextColor;
}

const DateInput: React.FunctionComponent<DateInputProps> = ({
  placeholder,
  htmlFor,
  value,
  onChangeHandler,
  color,
}) => (
  <div className="col input-group">
    <input
      type="date"
      id={htmlFor}
      className={`form-control ${classes.input} ${color ? classes[color] : classes.white}`}
      placeholder={placeholder}
      aria-label="Server"
      value={value}
      onChange={onChangeHandler}
    />
  </div>
);

export default DateInput;
