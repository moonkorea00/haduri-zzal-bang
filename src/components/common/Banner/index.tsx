import { Box, Flex, Text } from '@chakra-ui/react';
import Slider from '@components/Slider';
import useBreakPoints from '@hooks/useBreakPoints';

const Banner = () => {
  const { isMd, isLg } = useBreakPoints();

  return (
    <Flex
      as="section"
      direction={isLg ? 'column' : 'row'}
      minWidth="320px"
      p={isLg ? '0 10px' : '10px'}
      m={isLg ? '10px 0 0 0' : '16px'}
      bg="brand.50"
      borderRadius="16px"
    >
      <Flex
        direction="column"
        p={isLg ? '20px' : '40px'}
        gap={isMd ? '4px' : '10px'}
      >
        <Box
          color="brand.700"
          fontSize={['2xl', '2xl', '4xl']}
          fontWeight="900"
          w={isLg ? '' : '380px'}
        >
          하두리 짤을 만들어보세요!
        </Box>
        <Box color="brand.500" fontSize={['md', 'md', 'xl']} fontWeight="800">
          ㄱl억ㄴr니..?
        </Box>
        <Box color="brand.600" fontSize={['md', 'md', 'xl']} fontWeight="700">
          틱톡보다 20년 앞서갔던 한국 인싸문화..{' '}
          <Text as="span">&#128247;</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        maxWidth={isLg ? 'none' : '850px'}
        overflow="hidden"
      >
        <Slider />
      </Flex>
    </Flex>
  );
};

export default Banner;
