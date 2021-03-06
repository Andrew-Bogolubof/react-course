import React, { useState } from 'react';
import classes from './SortLineList.module.css';

export interface SortLineListProps {
  list: string[];
  // onClickHandler?: () => void;
}

const SortLineList: React.FunctionComponent<SortLineListProps> = ({ list }) => {
  const [selectedGenre, setSelectedGenre] = useState(list[0]);

  return (
    <>
      {list.map((listElement) => (
        <div key={listElement} className={`text-center mr-2 ${classes.list_element}`}>
          {listElement}
          <div
            className={`${listElement === selectedGenre ? classes.list_element_selected : ''}`}
          />
        </div>
      ))}
    </>
  );
};

export default SortLineList;
