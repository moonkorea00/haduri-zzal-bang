import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Instructions from '@components/HaduriFilter/Instructions';
import DefaultFilterOptions from '@components/HaduriFilter/DefaultFilterOptions';
import FilterCard from '@components/HaduriFilter/FilterCard';
import Uploader from '@components/Uploader';
import { FILTER_OPTIONS } from '@utils';

const Main = () => {
  const [image, setImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<Blob | null>(null);
  const [resolution, setResolution] = useState<number>(0.14);
  const [selectedFilter, setSelectedFilter] = useState(1);

  const compressImage = (image: File, resolution: number) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise<Blob>((resolve, reject) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        console.log(img.width);
        console.log(img.height);
        (ctx as CanvasRenderingContext2D).drawImage(
          img,
          0,
          0,
          img.width,
          img.height
        );

        canvas.toBlob(
          blob => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          'image/jpeg',
          resolution
        );
      };

      const reader = new FileReader();
      reader.onload = e => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(image);
    });
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResolution(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (image) {
      compressImage(image, resolution).then(setCompressedImage);
    }
  }, [image, resolution]);

  return (
    <Flex as="main" direction="column" gap="16px" p="10px" m="16px">
      {compressedImage && (
        <Flex as="section">
          <Instructions />
          <DefaultFilterOptions
            resolution={resolution}
            handleResolutionChange={handleResolutionChange}
          />
        </Flex>
      )}
      {compressedImage ? (
        <Flex
          as="section"
          justifyContent="center"
          gap="10px"
          wrap="wrap"
          w="100%"
          h="500px"
          overflowY="scroll"
          overscrollBehaviorY="none"
        >
          {FILTER_OPTIONS.map(({ id, style, name }) => (
            <FilterCard
              key={id}
              id={id}
              style={style}
              name={name}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              compressedImage={compressedImage}
            />
          ))}
        </Flex>
      ) : (
        <Uploader setImage={setImage} />
      )}
    </Flex>
  );
};

export default Main;
