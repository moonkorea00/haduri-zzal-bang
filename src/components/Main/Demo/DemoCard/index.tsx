import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Flex, Box, Button } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { assetPaths } from '@utils/assets';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type DemoCardProps = {
  src: string;
  description: string;
  btnContent: string;
  contentType: string;
};

const DemoCard = ({
  src,
  description,
  btnContent,
  contentType,
}: DemoCardProps) => {
  const { push } = useRouter();
  const { isMd, isLg } = useBreakPoints();

  return (
    <Flex
      gap="40px"
      direction={
        isMd ? 'column' : contentType === 'img' ? 'row-reverse' : 'row'
      }
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w={contentType === 'img' ? (isMd ? '300px' : '400px') : '100%'}
      >
        {contentType === 'img' ? (
          <Image
            src={src}
            alt="하두리"
            width={500}
            height={500}
            loading="eager"
          />
        ) : isLg ? (
          <Image
            src={assetPaths.main.resolutionImg}
            alt="하두리"
            width={500}
            height={500}
            loading="eager"
          />
        ) : (
          <ReactPlayer url={src} playing={true} loop={true} muted={true} />
        )}
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
        fontSize={['xl', 'xl', 'xl', '2xl', '3xl']}
        fontWeight="900"
      >
        <Box p={isMd ? '0' : '20px'} borderRadius="18px">
          {description}
        </Box>
        <Button
          bg="brand.600"
          color="white"
          size={isMd ? 'sm' : 'md'}
          borderRadius="24px"
          _hover={{bg:"brand.500"}}
          onClick={() => push('/create-haduri')}
        >
          {btnContent} &#128073;
        </Button>
      </Flex>
    </Flex>
  );
};

export default DemoCard;
