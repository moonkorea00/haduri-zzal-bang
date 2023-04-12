import { Flex } from '@chakra-ui/react';
import Header from '@components/common/Header';
import Banner from '@components/common/Banner';
import useBreakPoints from '@hooks/useBreakPoints';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isMd } = useBreakPoints();

  return (
    <Flex
      flexDir="column"
      gap={isMd ? '36px' : '100px'}
      maxW="1280px"
      m={isMd ? '10px auto' : '36px auto'}
      pb="70px"
      borderRadius="10px"
      bg="white"
      boxShadow="rgb(227 231 235) 0px 16px 48px"
    >
      <audio
          src='https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori'
          autoPlay={true}>
        </audio>
      <Header />
      <Banner />
      {children}
    </Flex>
  );
};

export default Layout;
