import { Flex } from '@chakra-ui/react';

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
      하두리 짤 만들기 ㅋ
    </Flex>
  );
};

export default Header;
