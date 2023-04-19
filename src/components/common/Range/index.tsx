import { Box } from '@chakra-ui/react';
import useDebounceChange from '@hooks/useDebounceChange';

type RangeProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  handleChange: (value: number) => void;
  width: number;
};

const Range = ({ min, max, step, value, handleChange, width }: RangeProps) => {
  const handleDebounceChange = useDebounceChange(handleChange, value);

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
