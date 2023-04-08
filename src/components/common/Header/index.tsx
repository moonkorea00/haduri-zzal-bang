import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      h="140px"
      p="40px"
      pl="60px"
      bg="brand.200"
      color="black"
      borderTopRadius="10px"
      fontSize="6xl"
      fontWeight="900"
    >
      <Link href="/">하두리 짤 만들기 ㅋ</Link>
    </Flex>
  );
};

export default Header;
