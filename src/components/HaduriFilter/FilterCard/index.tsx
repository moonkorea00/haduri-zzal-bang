import { Dispatch, SetStateAction } from 'react';
import NextImage from 'next/image';
import { Box, Text } from '@chakra-ui/react';

type FilterCard = {
  id: number;
  style: {
    filter: string;
  };
  name: string;
  selectedFilter: number;
  setSelectedFilter: Dispatch<SetStateAction<number>>;
  compressedImage: Blob;
};

const FilterCard = ({
  id,
  style,
  name,
  selectedFilter,
  setSelectedFilter,
  compressedImage,
}: FilterCard) => {
  return (
    <Box
      pos="relative"
      p="4px"
      border={selectedFilter === id ? '2px solid orange' : 'none'}
      borderRadius="8px"
      sx={{ cursor: 'pointer' }}
      onClick={() => setSelectedFilter(id)}
    >
      <NextImage
        src={URL.createObjectURL(compressedImage)}
        alt="하두리"
        width={200}
        height={100}
        style={style}
      />
      <NextImage
        src="/haduri.svg"
        alt="하두리"
        width={80}
        height={50}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
      <Text mt="2px" textAlign="center">
        {name}
      </Text>
    </Box>
  );
};

export default FilterCard;
