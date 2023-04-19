/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';

const useScrollToRef = <T extends HTMLElement>(
  ref: RefObject<T>,
  deps: any = [],
  condition = true
) => {
  useEffect(() => {
    if (condition && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, deps);
};

export default useScrollToRef;
