import * as React from 'react';
import { TextColor } from '../models';
import classes from './Input.module.css';

export interface InputProps {
  placeholder: string;
  htmlFor?: string;
  value?: string | number;
  initialValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: TextColor;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  htmlFor,
  value,
  initialValue,
  onChange,
  color,
}) => {
  const [initialInputValue] = React.useState(initialValue ?? '');
  return (
    <div className="col input-group">
      <input
        type="text"
        id={htmlFor}
        className={`form-control ${classes.input} ${color ? classes[color] : classes.white}`}
        placeholder={placeholder}
        aria-label="Server"
        value={value ?? initialInputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
