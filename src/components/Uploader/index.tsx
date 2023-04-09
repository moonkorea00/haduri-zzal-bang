import { useRef, ChangeEvent, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import useBreakPoints from '@hooks/useBreakPoints';
import { assetPaths } from '@utils/assets';

type UploaderProps = {
  setImage: Dispatch<SetStateAction<File | null>>;
};

const Uploader = ({ setImage }: UploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMd, isLg } = useBreakPoints();

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
        border="5px dashed black"
        borderRadius="4px"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageUpload}
          style={{ display: 'none', width: '100%', height: '100%' }}
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
