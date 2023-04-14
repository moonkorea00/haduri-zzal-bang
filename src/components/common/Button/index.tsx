import { Dispatch, SetStateAction } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type IconButtonProps = {
  size?: string;
  variant?: string;
  icon: IconType;
  label: string;
  state?: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const IconButton = ({
  size = 'xs',
  variant = 'outline',
  icon,
  label,
  state = true,
  setState,
}: IconButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      aria-label={label}
      onClick={() => setState(state)}
    >
      <Icon as={icon} />
    </Button>
  );
};

export default IconButton;
