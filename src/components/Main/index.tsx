import { Flex } from '@chakra-ui/react';
import Banner from './Banner';
import Demo from './Demo';
import useBreakPoints from '@hooks/useBreakPoints';

const Main = () => {
  const { isLg } = useBreakPoints();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={isLg ? '80px' : '130px'}
    >
      <Banner />
      <Demo />
    </Flex>
  );
};

export default Main;
