import { Box, Flex } from '@chakra-ui/react';
import Slider from '@components/Slider';

const Banner = () => {
  return (
    <Flex as="section" p="10px 0px" m="16px" bg="brand.50" borderRadius="16px">
      <Flex direction="column" p="40px" gap="10px">
      <Box color="brand.700" fontSize="4xl" fontWeight="900">
          하두리 짤을 만들어보세요!
        </Box>
        <Box color="brand.500" fontSize="xl" fontWeight="800">
          ㄱl억ㄴr니..?
        </Box>
        <Box color="brand.600" fontSize="xl" fontWeight="700">
          틱톡보다 20년 앞서갔던 한국 인싸문화..
        </Box>
        
      </Flex>
      <Slider />
    </Flex>
  );
};

export default Banner;
