import Image from 'next/image';
import { Flex, Box, Text } from '@chakra-ui/react';

type SliderCardProps = { src: string; title: string; cardWidth: number };

const SliderCard = ({ src, title, cardWidth }: SliderCardProps) => {
  return (
    <Flex direction="column" alignItems="center" gap="6px" w={cardWidth}>
      <Box w={cardWidth}>
        <Image src={src} alt="하두리" width={cardWidth} height={200} priority />
      </Box>
      <Text fontWeight="600">{title}</Text>
    </Flex>
  );
};

export default SliderCard;
