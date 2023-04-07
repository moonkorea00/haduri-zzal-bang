import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import SliderButton from './Button';
import SliderCard from './SliderCard';
import { SLIDER_IMG_DATA } from './slider.utils';
import { slideRight } from './slider.style';

const Slider = () => {
  const [isSliderRunning, setIsSliderRunning] = useState(true);
  
  const cardWidth = 200;
  const p = 10;
  const gap = 10;
  /* TODO : reponsive */

  return (
    <Flex direction="column" w="850px" overflow="hidden">
      {/* w={`${((cardWidth + gap) * numOfCardsInViewport) + pl}`px} */}
      {/* TODO : reponsive */}
      <Flex justifyContent="space-between">
        <Text
          as="span"
          p="6px 10px"
          mb="4px"
          fontSize="md"
          fontWeight="700"
          bg="orange.300"
          borderTopRadius="6px"
        >
          하두리 포토존
        </Text>
        <Flex alignItems="center" gap="6px">
          <SliderButton setState={setIsSliderRunning} icon={BsFillPlayFill} />
          <SliderButton
            state={false}
            setState={setIsSliderRunning}
            icon={BsFillPauseFill}
          />
        </Flex>
      </Flex>
      <Flex>
        <Box
          display="flex"
          bg="white"
          gap={`${gap}px`}
          p={`${p}px`}
          pt="0"
          animation={`${slideRight} 60s linear infinite`}
          sx={{ animationPlayState: isSliderRunning ? 'running' : 'paused' }}
        >
          {SLIDER_IMG_DATA.map(({ id, src, title }) => (
            <SliderCard
              key={id}
              src={src}
              title={title}
              cardWidth={cardWidth}
            />
          ))}
          {SLIDER_IMG_DATA.slice(0, 4).map(({ id, src, title }) => (
            <SliderCard
              key={id}
              src={src}
              title={title}
              cardWidth={cardWidth}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Slider;
