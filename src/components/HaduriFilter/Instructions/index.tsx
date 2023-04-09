import { Flex, Box, Button, Text } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { INSTRUCTIONS_DATA } from './instructions.utils';

const Instructions = () => {
  const { isMd } = useBreakPoints();

  return (
    <Flex direction="column" gap="3px">
      <Box mb="6px">
        <Button
          as="h2"
          size={isMd ? 'sm' : 'md'}
          fontSize={isMd ? 'md' : 'xl'}
          fontWeight="600"
        >
          필터 / 화질 선택
        </Button>
      </Box>
      {INSTRUCTIONS_DATA.map(({ id, text }) => (
        <Text key={id} fontSize={isMd ? '0.925rem' : 'md'}>
          &#9432; {text}
        </Text>
      ))}
    </Flex>
  );
};

export default Instructions;
