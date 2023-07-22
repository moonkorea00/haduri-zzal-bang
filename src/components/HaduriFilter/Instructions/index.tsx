import { Flex, Button, Text } from '@chakra-ui/react';
import InstructionsItem from './InstructionsItem';
import useBreakPoints from '@hooks/useBreakPoints';

const Instructions = () => {
  const { isMd } = useBreakPoints();

  return (
    <Flex direction="column" gap="3px">
      <Flex mb="6px">
        <Button
          size={isMd ? 'sm' : 'md'}
          fontSize={isMd ? 'md' : 'xl'}
          fontWeight="600"
          sx={{ cursor: 'default' }}
        >
          필터 / 화질
        </Button>
      </Flex>
      {INSTRUCTIONS_DATA.map(({ id, text }) => (
        <InstructionsItem key={id} text={text} />
      ))}
    </Flex>
  );
};

export default Instructions;

const INSTRUCTIONS_DATA = [
  {
    id: 1,
    text: '인물과 옷차림이 촌스러울수록 더 훌륭한 하두리 감성을 살릴 수 있습니다.',
  },
  {
    id: 2,
    text: '원본 사진에 따라 화면에 보이는 화질과 다운로드된 사진의 화질이 상이할 수 있습니다.',
  },
  { id: 3, text: '권장 화질 : 0.1 ~ 0.2' },
];
