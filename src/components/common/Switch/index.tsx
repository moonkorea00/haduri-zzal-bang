import type { SetFilterOptions, filterOptionsType } from '@types';
import {
  FormControl,
  FormLabel,
  Switch as ChakraSwitch,
} from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';

type SwitchProps = {
  name: keyof filterOptionsType;
  value: boolean;
  onChange: SetFilterOptions;
  label: string;
  defaultChecked: boolean;
};

const Switch = ({
  name,
  value,
  onChange,
  label,
  defaultChecked,
}: SwitchProps) => {
  const { isMd } = useBreakPoints();
  return (
    <FormControl
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt="6px"
    >
      <FormLabel
        as="span"
        htmlFor="isChecked"
        fontSize={isMd ? 'sm' : 'md'}
        fontWeight="600"
        mb="0"
      >
        {label}
      </FormLabel>
      <ChakraSwitch
        id="isChecked"
        defaultChecked={defaultChecked}
        value={String(value)}
        onChange={() => onChange(name, !value)}
        colorScheme="orange"
      />
    </FormControl>
  );
};

export default Switch;
