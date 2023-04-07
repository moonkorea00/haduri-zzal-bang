import { Dispatch, SetStateAction } from 'react';
import NextImage from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import { filterOptionsProps } from '@types';

type FilterCard = {
  style: {
    filter: string;
  };
  name: string;
  filterOptions: filterOptionsProps;
  setFilterOptions: Dispatch<SetStateAction<filterOptionsProps>>;
  compressedImage: Blob;
};

const FilterCard = ({
  style,
  name,
  filterOptions,
  setFilterOptions,
  compressedImage,
}: FilterCard) => {
  return (
    <Box
      pos="relative"
      p="4px"
      border={
        filterOptions?.filterStyle === style?.filter
          ? '2px solid orange'
          : 'none'
      }
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
          width={80}
          height={50}
          style={{
            position: 'absolute',
            top: '4px',
            left: '4px',
          }}
        />
      )}
      <Text mt="2px" textAlign="center">
        {name}
      </Text>
    </Box>
  );
};

export default FilterCard;
