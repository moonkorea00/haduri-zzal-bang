import { Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import AudioPlayer from '../AudioPlayer';
import useBreakPoints from '@hooks/useBreakPoints';

const Header = () => {
  const { isSm, isMd, isLg } = useBreakPoints();

  return (
    <Flex as="header" direction="column">
      <Flex
        justifyContent={isLg ? 'center' : 'row'}
        alignItems="center"
        minWidth="320px"
        h={isLg ? '100px' : '140px'}
        p={isMd ? '0' : '30px 50px'}
        bg="brand.200"
        color="black"
        borderTopRadius="10px"
        fontSize={['4xl', '4xl', '5xl', '6xl', '7xl']}
        fontWeight="900"
      >
        <Link href="/">
          &#128247; 하두리 짤 만들기{' '}
          <Text as="span" display={isSm ? 'none' : 'inline'}>
            ㅋ&#9996;
          </Text>
        </Link>
      </Flex>
      <AudioPlayer />
    </Flex>
  );
};

export default Header;
