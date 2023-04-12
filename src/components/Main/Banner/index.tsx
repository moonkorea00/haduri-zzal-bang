import { Flex } from '@chakra-ui/react';
import BannerCard from './BannerCard';
import { MAIN_PAGE_BANNER_DATA } from '../main.utils';
import useBreakPoints from '@hooks/useBreakPoints';

const Banner = () => {
  const { isSm, isLg } = useBreakPoints();
  return (
    <Flex
      as="section"
      direction={isLg ? 'column' : 'row'}
      justifyContent="center"
      alignItems="center"
      gap={isSm ? '20px' : '30px'}
      w="100%"
      p={['20px 0', '20px 0', '30px 0', '40px 0']}
      bg="brand.100"
      borderRadius={isLg ? '10px' : '0'}
    >
      {MAIN_PAGE_BANNER_DATA.map(({ id, title, description, icon }) => (
        <BannerCard
          key={id}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </Flex>
  );
};

export default Banner;
