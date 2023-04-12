import { Flex, Button, Text } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { INSTRUCTIONS_DATA } from './instructions.utils';

const Instructions = () => {
  const { isMd } = useBreakPoints();

  return (
    <Flex direction="column" gap="3px">
      <Flex mb="6px">
        <Button
          size={isMd ? 'sm' : 'md'}
          fontSize={isMd ? 'md' : 'xl'}
          fontWeight="600"
          sx={{ cursor: 'default' }}
        >
          필터 / 화질
        </Button>
      </Flex>
      {INSTRUCTIONS_DATA.map(({ id, text }) => (
        <Text key={id} fontSize={isMd ? '0.925rem' : 'md'}>
          &#9432; {text}
        </Text>
      ))}
    </Flex>
  );
};

export default Instructions;
