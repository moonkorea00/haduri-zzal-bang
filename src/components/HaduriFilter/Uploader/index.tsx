import type { ChangeEvent } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import useDragAndDropFile from '@hooks/useDragAndDropFile';
import { assetPaths } from '@utils/assets';

type UploaderProps = {
  setImage: (value: File) => void;
};

const Uploader = ({ setImage }: UploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMd, isLg } = useBreakPoints();
  const {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
  } = useDragAndDropFile(setImage);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((e.target.files as FileList)[0]);
  };

  return (
    <Box
      minWidth="260px"
      p={['10px 10px', '10px 10px', '10px 50px', '10px 90px', '30px 180px']}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={isLg ? '0' : '26px'}
        h={isLg ? '280px' : '360px'}
        bg={isDragging ? 'brand.200' : 'none'}
        opacity={isDragging ? '0.5' : '1'}
        border="5px dashed black"
        borderRadius="4px"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <Input
          display="none"
          w="100%"
          h="100%"
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageUpload}
        />
        <Box p="20px">
          <Image
            src={assetPaths.uploadImg}
            alt="업로드"
            width={isMd ? 130 : 170}
            height={100}
            loading="eager"
          />
        </Box>
        <Text
          textAlign="center"
          p="10px"
          fontSize={isLg ? 'md' : 'xl'}
          fontWeight="600"
        >
          사진을 이곳에 드래그 또는 선택해서 업로드 해주세요.
        </Text>
        <Button size={isLg ? 'sm' : 'md'}>사진 업로드</Button>
      </Flex>
    </Box>
  );
};

export default Uploader;
