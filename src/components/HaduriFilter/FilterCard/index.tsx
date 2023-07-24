import type { SetFilterOptions, TFilterOptions } from '@types';
import NextImage from 'next/image';
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import Dialog from '@components/common/Dialog';
import useBreakPoints from '@hooks/useBreakPoints';
import useShareWithKakao from './hooks/useShareWithKakao';
import { assetPaths } from '@utils/assets';
import { KakaoFeedMetaData } from '@utils/kakao';
import { KakaoShareDialogProps } from '@components/common/Dialog/dialog.utils';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onShareWithKakao = useShareWithKakao(KakaoFeedMetaData);

  const isFilterSelected = filterOptions.filterStyle === style.filter;

  const downloadImageAndRenderDialog = () => {
    onDownload();
    onOpen();
  };

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
          onClick={downloadImageAndRenderDialog}
        >
          저장하기
        </Button>
      )}
      <Text mt="2px" textAlign="center">
        {name}
      </Text>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onShareWithKakao}
        {...KakaoShareDialogProps}
      />
    </Box>
  );
};

export default FilterCard;
