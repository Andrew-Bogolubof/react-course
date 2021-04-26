import * as React from 'react';
import { TextColor } from '../models';
import classes from './SelectInput.module.css';

export interface SelectInputProps {
  htmlFor?: string;
  options: string[];
  selectedOptions?: string[];
  onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  color?: TextColor;
}

const SelectInput: React.FunctionComponent<SelectInputProps> = ({
  htmlFor,
  options,
  onChangeHandler,
  color,
  selectedOptions,
}) => (
  <div className="col input-group">
    <select
      className={`form-select custom-select ${classes.input} ${
        color ? classes[color] : classes.white
      }`}
      id={htmlFor}
      onChange={onChangeHandler}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectInput;
