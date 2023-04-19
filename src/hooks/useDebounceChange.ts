/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, ChangeEvent } from 'react';

const useDebounceChange = (
  onChange: (value: number) => void,
  initialValue: number,
  delay: number = 15
) => {
  const [debouncedValue, setDebouncedValue] = useState<number>(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(debouncedValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [debouncedValue]);

  const handleDebounceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(Number(e.target.value));
  };

  return handleDebounceChange;
};

export default useDebounceChange;
