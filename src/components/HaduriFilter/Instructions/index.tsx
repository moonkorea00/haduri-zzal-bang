import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { INSTRUCTIONS_DATA } from './instructions.utils';

const Instructions = () => {
  return (
    <Flex direction="column">
      <Box mb="6px">
        <Button as="h2" fontSize="xl" fontWeight="600">
          필터 / 화질 선택
        </Button>
      </Box>
      {INSTRUCTIONS_DATA.map(({ id, text }) => (
        <Text key={id}>&#9432; {text}</Text>
      ))}
    </Flex>
  );
};

export default Instructions;
