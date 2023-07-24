/* eslint-disable react-hooks/exhaustive-deps */
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

const useDebounceChange = <T>(
  onChange: (value: T) => void,
  initialValue: T,
  convert: (value: string) => T,
  delay: number = 15
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const handleDebounceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(convert(e.target.value));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(debouncedValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [debouncedValue]);

  return handleDebounceChange;
};

export default useDebounceChange;
