import { keyframes } from '@chakra-ui/react';
import { SLIDER_IMG_DATA } from './slider.utils';

const cardWidth = 200;
const p = 10;
const gap = 10;
/* TODO reponsive */

export const slideRight = keyframes`
  0% {
    transform : translateX(0);
  }
  100%{
    transform: translateX(calc(-${cardWidth}px * ${
  SLIDER_IMG_DATA.length
} - ${p}px - (${gap}px * ${SLIDER_IMG_DATA.length - 1})))
}
`;
/* - ${p}px - (${gap}*${SLIDER_IMG_DATA.length - 1})=50 */
