import type { SetFilterOptions, TFilterOptions } from '@types';
import NextImage from 'next/image';
import { Box, Button, Text } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { assetPaths } from '@utils/assets';

type FilterCard = {
  style: {
    filter: string;
  };
  name: string;
  compressedImage: Blob;
  filterOptions: TFilterOptions;
  onSetFilterOptions: SetFilterOptions;
  onDownload: () => void;
};

const FilterCard = ({
  style,
  name,
  compressedImage,
  filterOptions,
  onSetFilterOptions,
  onDownload,
}: FilterCard) => {
  const { isSm } = useBreakPoints();
  const isFilterSelected = filterOptions.filterStyle === style.filter;

  return (
    <Box
      pos="relative"
      p="4px"
      border={isFilterSelected ? '2px solid orange' : 'none'}
      borderRadius="8px"
      sx={{ cursor: 'pointer' }}
      onClick={() => onSetFilterOptions('filterStyle', style.filter)}
    >
      <NextImage
        src={URL.createObjectURL(compressedImage)}
        alt="하두리"
        width={filterOptions.isLargeMode ? 500 : 200}
        height={100}
        style={style}
      />
      {filterOptions.isUseWaterMark && (
        <NextImage
          src={assetPaths.watermark}
          alt="하두리"
          width={filterOptions.isLargeMode ? (isSm ? 100 : 130) : 70}
          height={50}
          style={{
            position: 'absolute',
            top: `${filterOptions.isLargeMode ? '13px' : '10px'}`,
            left: `${filterOptions.isLargeMode ? '13px' : '10px'}`,
          }}
        />
      )}
      {isFilterSelected && (
        <Button
          pos="absolute"
          top="8px"
          right="8px"
          size={filterOptions.isLargeMode ? 'lg' : 'sm'}
          colorScheme="orange"
          onClick={onDownload}
        >
          저장하기
        </Button>
      )}
      <Text mt="2px" textAlign="center">
        {name}
      </Text>
    </Box>
  );
};

export default FilterCard;
