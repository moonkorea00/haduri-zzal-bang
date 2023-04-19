import { useRef, Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import Range from '@components/common/Range';
import Switch from '@components/common/Switch';
import useBreakPoints from '@hooks/useBreakPoints';
import useScrollToRef from '../hooks/useScrollToRef';
import { filterOptionsProps } from '@types';

type DefaultFilterOptionsProps = {
  image: File | null;
  filterOptions: filterOptionsProps;
  setFilterOptions: Dispatch<SetStateAction<filterOptionsProps>>;
  handleResolutionChange: (value: any) => void;
  resetImgState: MouseEventHandler<HTMLButtonElement>;
};

const DefaultFilterOptions = ({
  image,
  filterOptions,
  setFilterOptions,
  handleResolutionChange,
  resetImgState,
}: DefaultFilterOptionsProps) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const { isMd, isLg } = useBreakPoints();
  useScrollToRef(filterRef, [image]);

  return (
    <Flex ref={filterRef}>
      <Flex direction="column" gap="4px">
        <Flex justifyContent="space-between">
          <Text as="span" fontSize={isMd ? '0.93rem' : 'md'} fontWeight="600">
            화질
          </Text>
          <Text as="span" ml="16px">
            {filterOptions?.resolution}
          </Text>
        </Flex>
        <Range
          min={0}
          max={1}
          step={0.02}
          value={filterOptions?.resolution}
          handleChange={handleResolutionChange}
          width={isLg ? 280 : 400}
        />
        <Switch
          state={'isUseWaterMark'}
          options={filterOptions}
          setOptions={setFilterOptions}
          content={'하두리 배너 사용'}
          defaultChecked={true}
        />
        <Switch
          state={'isLargeMode'}
          options={filterOptions}
          setOptions={setFilterOptions}
          content={'이미지 크게 보기'}
          defaultChecked={false}
        />
        <Button size="sm" onClick={resetImgState}>
          다른 사진 선택
        </Button>
      </Flex>
    </Flex>
  );
};

export default DefaultFilterOptions;
