import { keyframes } from '@chakra-ui/react';
import { SLIDER_IMG_DATA } from './slider.constants';

const cardWidth = 200;
const p = 10;
const gap = 10;
const translateXValue =
  -(cardWidth * SLIDER_IMG_DATA.length) -
  (gap * SLIDER_IMG_DATA.length - 1) -
  p;

export const slideRight = keyframes`
  0% {
    transform : translateX(0);
  }
  100%{
    transform: translateX(${translateXValue}px)
}
`;
