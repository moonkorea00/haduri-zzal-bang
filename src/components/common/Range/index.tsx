import { ChangeEvent } from 'react';
import { Box } from '@chakra-ui/react';

type RangeProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  handleChange: (() => void) | ((e: ChangeEvent<HTMLInputElement>) => void);
  width: number;
};

const Range = ({ min, max, step, value, handleChange, width }: RangeProps) => {
  return (
    <Box
      as="input"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      sx={{
        width: `${width}px`,
        filter: 'hue-rotate(3.142rad)',
        cursor: 'pointer',
      }}
    />
  );
};

export default Range;
