import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks';
import classes from './DropDown.module.css';

export interface DropDownProps {
  options: string[];
  option: string;
  onClickHandler: (selectedOption: string) => void;
}

const DropDown: React.FunctionComponent<DropDownProps> = ({ options, option, onClickHandler }) => {
  const [isOptionModalOpened, setIsOptionModalOpened] = useState(false);
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setIsOptionModalOpened(false));
  const setDropDownOption = (selectedOption: string) => {
    onClickHandler(selectedOption);
  };

  const modal = (
    <div className={`d-flex flex-column pt-3 pb-3 ${classes.edit_container}`} ref={popupRef}>
      {/* PATTERN: Avoid using Index as Key */}
      {options.map((optionItem) => (
        <button
          type="button"
          key={optionItem}
          onClick={(event) => {
            event.stopPropagation();
            setDropDownOption(optionItem);
            setIsOptionModalOpened(false);
          }}
          className={`pl-3 p-2 text-left h6 ${classes.edit_option}`}
        >
          {optionItem}
        </button>
      ))}
    </div>
  );

  return (
    <div className="dropdown">
      <button
        className={`btn dropdown-toggle ${classes.dropdown_button}`}
        type="button"
        id="dropdownMenuButton"
        onClick={() => {
          setIsOptionModalOpened(true);
        }}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {option}
        {isOptionModalOpened && modal}
      </button>
    </div>
  );
};

// PATTERN: memoization
export default React.memo(DropDown);
