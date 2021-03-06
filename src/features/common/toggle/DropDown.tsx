import * as React from 'react';
import classes from './DropDown.module.css';

export interface DropDownProps {
  options: string[];
  // onClickHandler?: () => void;
}

const DropDown: React.FunctionComponent<DropDownProps> = ({ options }) => (
  <div className="dropdown">
    <button
      className={`btn dropdown-toggle ${classes.dropdown_button}`}
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {options[0]}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
  </div>
);

export default DropDown;
