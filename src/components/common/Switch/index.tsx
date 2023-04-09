import { Dispatch, SetStateAction } from 'react';
import {
  FormControl,
  FormLabel,
  Switch as ChakraSwitch,
} from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { filterOptionsProps } from '@types';

type SwitchProps = {
  state: string;
  options: filterOptionsProps;
  setOptions: Dispatch<SetStateAction<filterOptionsProps>>;
  content: string;
  defaultChecked: boolean;
};

const Switch = ({
  state,
  options,
  setOptions,
  content,
  defaultChecked,
}: SwitchProps) => {
  const { isSm, isMd } = useBreakPoints();
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
        fontSize={isMd ? 'sm':"md"}
        fontWeight="600"
        mb="0"
      >
        {content}
      </FormLabel>
      <ChakraSwitch
        id="isChecked"
        defaultChecked={defaultChecked}
        value={String(options?.[state as keyof typeof options])}
        onChange={() =>
          setOptions({
            ...options,
            [state]: !options?.[state as keyof typeof options],
          })
        }
        colorScheme="orange"
      />
    </FormControl>
  );
};

export default Switch;
