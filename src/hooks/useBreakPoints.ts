import { useMediaQuery } from '@chakra-ui/react';

const useBreakPoints = () => {
  const [isSm, isMd, isLg, isXl] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 768px)',
    '(max-width: 992px)',
    '(max-width: 1280px)',
  ]);

  return { isSm, isMd, isLg, isXl };
};

export default useBreakPoints;
