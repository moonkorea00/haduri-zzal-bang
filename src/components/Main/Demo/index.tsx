import { Flex } from '@chakra-ui/react';
import DemoCard from './DemoCard';
import useBreakPoints from '@hooks/useBreakPoints';
import { MAIN_PAGE_DATA } from '../main.utils';

const Demo = () => {
  const { isSm, isMd } = useBreakPoints();
  return (
    <Flex
      as="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={isMd ? '100px' : '140px'}
      p={isSm ? '0' : '40px'}
    >
      {MAIN_PAGE_DATA.map(
        ({ id, src, description, btnContent, contentType }) => (
          <DemoCard
            key={id}
            src={src}
            description={description}
            btnContent={btnContent}
            contentType={contentType}
          />
        )
      )}
    </Flex>
  );
};

export default Demo;
Demo;
