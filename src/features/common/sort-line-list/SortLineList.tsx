import React from 'react';
import classes from './SortLineList.module.css';

export interface SortLineListProps {
  list: string[];
  item: string;
  onClickHandler: (item: string) => void;
}

const SortLineList: React.FunctionComponent<SortLineListProps> = ({
  list,
  item,
  onClickHandler,
}) => (
  <>
    {/* PATTERN: Fragments */}
    {list.map((listElement) => (
      <button
        key={listElement}
        type="button"
        className={`text-center mr-2 ${classes.list_element}`}
        onClick={() => onClickHandler(listElement)}
      >
        {listElement}
        <div className={`${listElement === item ? classes.list_element_selected : ''}`} />
      </button>
    ))}
  </>
);

export default SortLineList;
