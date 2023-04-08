import { Dispatch, SetStateAction } from 'react';
import NextImage from 'next/image';
import { Box, Button, Text } from '@chakra-ui/react';
import { filterOptionsProps } from '@types';

type FilterCard = {
  style: {
    filter: string;
  };
  name: string;
  filterOptions: filterOptionsProps;
  setFilterOptions: Dispatch<SetStateAction<filterOptionsProps>>;
  compressedImage: Blob;
  handleDownload: () => void;
};

const FilterCard = ({
  style,
  name,
  filterOptions,
  setFilterOptions,
  compressedImage,
  handleDownload,
}: FilterCard) => {
  const isFilterSelected = filterOptions?.filterStyle === style?.filter;

  return (
    <Box
      pos="relative"
      p="4px"
      border={isFilterSelected ? '2px solid orange' : 'none'}
      borderRadius="8px"
      sx={{ cursor: 'pointer' }}
      onClick={() =>
        setFilterOptions({ ...filterOptions, filterStyle: style?.filter })
      }
    >
      <NextImage
        src={URL.createObjectURL(compressedImage)}
        alt="하두리"
        width={filterOptions?.isLargeMode ? 500 : 200}
        height={100}
        style={style}
      />
      {filterOptions?.isUseWaterMark && (
        <NextImage
          src="/haduri.svg"
          alt="하두리"
          width={filterOptions?.isLargeMode ? 160 : 80}
          height={50}
          style={{
            position: 'absolute',
            top: `${filterOptions?.isLargeMode ? '10px' : '6px'}`,
            left: `${filterOptions?.isLargeMode ? '10px' : '6px'}`,
          }}
        />
      )}
      {isFilterSelected && (
        <Button
          pos="absolute"
          top="0"
          right="0"
          size={filterOptions?.isLargeMode ? 'lg' : 'sm'}
          colorScheme="orange"
          onClick={handleDownload}
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
