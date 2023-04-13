import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import IconButton from '@components/common/Button';
import SliderCard from './SliderCard';
import useBreakPoints from '@hooks/useBreakPoints';
import { SLIDER_IMG_DATA } from './slider.utils';
import { slideRight } from './slider.style';

const Slider = () => {
  const [isSliderRunning, setIsSliderRunning] = useState(true);
  const { isMd } = useBreakPoints();

  return (
    <Flex direction="column" maxWidth="850px" overflow="hidden">
      {/* calc slider maxWidth = (cardWidth + gap) * numOfCardsInViewPort + pl */}
      <Flex justifyContent="space-between" maxWidth={'850'}>
        <Text
          as="span"
          p={isMd ? '4px 8px' : '6px 10px'}
          mb="4px"
          fontSize="md"
          fontWeight="700"
          bg="orange.300"
          borderTopRadius="6px"
        >
          하두리 포토존
        </Text>
        <Flex alignItems="center" gap="6px">
          <IconButton
            setState={setIsSliderRunning}
            icon={BsFillPlayFill}
            label={'슬라이드쇼 재생'}
          />
          <IconButton
            state={false}
            setState={setIsSliderRunning}
            label={'슬라이드쇼 일시 중지'}
            icon={BsFillPauseFill}
          />
        </Flex>
      </Flex>
      <Flex>
        <Box
          display="flex"
          bg="white"
          gap="10px"
          p="10px"
          pt="0"
          animation={`${slideRight} 60s linear infinite`}
          sx={{ animationPlayState: isSliderRunning ? 'running' : 'paused' }}
        >
          {SLIDER_IMG_DATA.map(({ id, src, title }) => (
            <SliderCard key={id} src={src} title={title} cardWidth={200} />
          ))}
          {SLIDER_IMG_DATA.slice(0, 4).map(({ id, src, title }) => (
            <SliderCard key={id} src={src} title={title} cardWidth={200} />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Slider;
