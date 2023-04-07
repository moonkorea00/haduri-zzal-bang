import { Flex } from '@chakra-ui/react';
import Header from '@components/Header';
import Banner from '@components/Banner';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      flexDir="column"
      maxW="1280px"
      m="36px auto"
      borderRadius="10px"
      bg="white"
      boxShadow="rgb(227 231 235) 0px 16px 48px"
    >
      <Header />
      <Banner />
      {children}
    </Flex>
  );
};

export default Layout;
