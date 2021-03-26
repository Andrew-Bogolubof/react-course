import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useClickOutside } from '../../../hooks';
import { mapSortByFieldToSortBy } from '../../../models/mappers';
import { useSelector } from '../../../store';
import { setSortBy } from '../../../store/actions/sorting-actions';
import classes from './DropDown.module.css';

export interface DropDownProps {
  options: string[];
  // onClickHandler?: () => void;
}

const DropDown: React.FunctionComponent<DropDownProps> = ({ options }) => {
  const [isOptionModalOpened, setIsOptionModalOpened] = useState(false);
  const option = useSelector((state) => state.sortingOptions.sortBy);
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setIsOptionModalOpened(false));
  const setDropDownOption = (selectedOption: string) => {
    dispatch(setSortBy({ sortBy: selectedOption }));
  };

  const modal = (
    <div className={`d-flex flex-column pt-3 pb-3 ${classes.edit_container}`} ref={popupRef}>
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
        {mapSortByFieldToSortBy(option)}
        {isOptionModalOpened && modal}
      </button>
    </div>
  );
};

export default DropDown;
