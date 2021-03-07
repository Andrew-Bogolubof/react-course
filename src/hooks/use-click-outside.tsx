import React, { useEffect } from 'react';

type UseOutsideType = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.MutableRefObject<any>,
  outsideHandler: () => void
) => void;

export const useClickOutside: UseOutsideType = (ref, outsideHandler) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        outsideHandler();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, outsideHandler]);
};
