import * as React from 'react';

export const useScrollLock = () => {
  React.useEffect(() => {
    const scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      window.scrollTo(0, scrollPosition);
      document.body.style.position = '';
      document.body.style.top = '';
    };
  }, []);
};
