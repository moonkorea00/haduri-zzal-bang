import { Flex, Box, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import useBreakPoints from '@hooks/useBreakPoints';

type BannerCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const BannerCard = ({ icon, title, description }: BannerCardProps) => {
  const { isSm } = useBreakPoints();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="15px"
      w={isSm ? '280px' : '320px'}
      h="120px"
      p="20px"
      bg="white"
      borderRadius="10px"
    >
      <Icon as={icon} boxSize={8} alignSelf="center" />
      <Flex direction="column" gap="3px">
        <Box fontSize="2xl" fontWeight="800">
          {title}
        </Box>
        <Box fontSize="sm">{description}</Box>
      </Flex>
    </Flex>
  );
};

export default BannerCard;
