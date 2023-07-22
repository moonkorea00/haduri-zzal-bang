import { Text } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';

type InstructionsItemProps = {
  text: string;
};

const InstructionsItem = ({ text }: InstructionsItemProps) => {
  const { isMd } = useBreakPoints();

  return <Text fontSize={isMd ? '0.925rem' : 'md'}>&#9432; {text}</Text>;
};

export default InstructionsItem;
