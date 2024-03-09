import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type IconButtonProps = {
  size?: string;
  variant?: string;
  icon: IconType;
  label: string;
  onClickHandler: () => void;
};

const IconButton = ({
  size = 'xs',
  variant = 'outline',
  icon,
  label,
  onClickHandler,
}: IconButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      aria-label={label}
      onClick={onClickHandler}
    >
      <Icon as={icon} />
    </Button>
  );
};

export default IconButton;
