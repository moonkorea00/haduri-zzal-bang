import { Dispatch, SetStateAction } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type SliderButtonProps = {
  state?: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  icon: IconType;
};

const SliderButton = ({ state = true, setState, icon }: SliderButtonProps) => {
  return (
    <Button size="xs" variant="outline" onClick={() => setState(state)}>
      <Icon as={icon} />
    </Button>
  );
};

export default SliderButton;
