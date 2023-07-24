import type { SetFilterOptions, TFilterOptions } from '@types';
import { useRef } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import Range from '@components/common/Range';
import Switch from '@components/common/Switch';
import useBreakPoints from '@hooks/useBreakPoints';
import useScrollToRef from '../hooks/useScrollToRef';

type DefaultFilterOptionsProps = {
  image: File | null;
  filterOptions: TFilterOptions;
  onSetFilterOptions: SetFilterOptions;
  onReset: () => void;
};

const DefaultFilterOptions = ({
  image,
  filterOptions,
  onSetFilterOptions,
  onReset,
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
            {filterOptions.resolution}
          </Text>
        </Flex>
        <Range
          name="resolution"
          value={filterOptions.resolution}
          onSetFilterOptions={onSetFilterOptions}
          width={isLg ? 280 : 400}
        />
        <Switch
          name="isUseWaterMark"
          value={filterOptions.isUseWaterMark}
          onChange={onSetFilterOptions}
          label="하두리 배너 사용"
          defaultChecked={true}
        />
        <Switch
          name="isLargeMode"
          value={filterOptions.isLargeMode}
          onChange={onSetFilterOptions}
          label="이미지 크게 보기"
          defaultChecked={false}
        />
        <Button size="sm" onClick={onReset}>
          다른 사진 선택
        </Button>
      </Flex>
    </Flex>
  );
};

export default DefaultFilterOptions;
