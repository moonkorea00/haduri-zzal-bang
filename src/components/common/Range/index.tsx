import type { SetFilterOptions, TFilterOptions } from '@types';
import { Box } from '@chakra-ui/react';
import useDebounceChange from '@hooks/useDebounceChange';

type RangeProps = {
  name: keyof TFilterOptions;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onSetFilterOptions: SetFilterOptions;
  width: number;
};

const Range = ({
  name,
  min = 0,
  max = 1,
  step = 0.02,
  value,
  onSetFilterOptions,
  width,
}: RangeProps) => {
  const handleDebounceChange = useDebounceChange<number>(
    (value) => onSetFilterOptions(name, value),
    value,
    Number
  );

  return (
    <Box
      as="input"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleDebounceChange}
      sx={{
        width: `${width}px`,
        filter: 'hue-rotate(3.142rad)',
        cursor: 'pointer',
      }}
    />
  );
};

export default Range;
