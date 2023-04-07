import { useRef, ChangeEvent, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

type UploaderProps = {
  setImage: Dispatch<SetStateAction<File | null>>;
};

const Uploader = ({ setImage }: UploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((e.target.files as FileList)[0]);
  };

  return (
    <Box p="30px 180px">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="26px"
        h="360px"
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
        <Box>
          <Image
            src="/upload/upload.png"
            alt="업로드"
            width={170}
            height={150}
            loading="eager"
          />
        </Box>
        <Text textAlign="center" fontSize="xl" fontWeight="600">
          사진을 이곳에 드래그 또는 선택해서 업로드 해주세요.
        </Text>
        <Button>사진 업로드</Button>
      </Flex>
    </Box>
  );
};

export default Uploader;
