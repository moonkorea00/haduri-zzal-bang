import { Flex } from '@chakra-ui/react';
import Instructions from '@components/HaduriFilter/Instructions';
import DefaultFilterOptions from '@components/HaduriFilter/DefaultFilterOptions';
import FilterCard from '@components/HaduriFilter/FilterCard';
import Uploader from '@components/HaduriFilter/Uploader';
import useImageProcessing from '@hooks/useImageProcessing';
import useBreakPoints from '@hooks/useBreakPoints';
import { FILTER_STYLE_OPTIONS } from '@utils/filter';

const HaduriFilter = () => {
  const { isLg } = useBreakPoints();
  const {
    state: imageState,
    onSetImage,
    onSetFilterOptions,
    onReset,
    onDownload,
  } = useImageProcessing();

  return (
    <Flex as="main" direction="column" gap="16px" p="10px" m="16px">
      {imageState.compressedImage && (
        <Flex
          as="section"
          direction={isLg ? 'column' : 'row'}
          gap={isLg ? '40px' : '0'}
          mb={isLg ? '0' : '26px'}
          justifyContent="space-around"
        >
          <Instructions />
          <DefaultFilterOptions
            image={imageState.image}
            filterOptions={imageState.filterOptions}
            onSetFilterOptions={onSetFilterOptions}
            onReset={onReset}
          />
        </Flex>
      )}
      {imageState.compressedImage ? (
        <Flex
          as="section"
          justifyContent="center"
          gap="10px"
          wrap="wrap"
          w="100%"
          h={imageState.filterOptions.isLargeMode ? '700px' : '500px'}
          overflowY="scroll"
        >
          {FILTER_STYLE_OPTIONS.map(({ id, style, name }) => (
            <FilterCard
              key={id}
              style={style}
              name={name}
              compressedImage={imageState.compressedImage as Blob}
              filterOptions={imageState.filterOptions}
              onSetFilterOptions={onSetFilterOptions}
              onDownload={onDownload}
            />
          ))}
        </Flex>
      ) : (
        <Uploader setImage={onSetImage} />
      )}
    </Flex>
  );
};

export default HaduriFilter;
