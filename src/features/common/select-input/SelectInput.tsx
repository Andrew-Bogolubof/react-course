import * as React from 'react';
import classes from './SelectInput.module.css';

export interface SelectInputProps {
  placeholder: string;
  htmlFor?: string;
  options: string[];
  // onChangeHandler?: () => void;
}

const SelectInput: React.FunctionComponent<SelectInputProps> = ({
  placeholder,
  htmlFor,
  options,
}) => (
  <div className="col input-group">
    <select className={`form-select custom-select ${classes.input}`} id={htmlFor}>
      {options.map((option) => (
        <option key={option} selected>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
