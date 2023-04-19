import { Flex } from '@chakra-ui/react';
import Instructions from '@components/HaduriFilter/Instructions';
import DefaultFilterOptions from '@components/HaduriFilter/DefaultFilterOptions';
import FilterCard from '@components/HaduriFilter/FilterCard';
import Uploader from '@components/HaduriFilter/Uploader';
import useHaduriFilter from '@hooks/useHaduriFilter';
import useBreakPoints from '@hooks/useBreakPoints';
import { FILTER_OPTIONS } from '@utils/filter';

const HaduriFilter = () => {
  const { isLg } = useBreakPoints();
  const {
    image,
    setImage,
    compressedImage,
    filterOptions,
    setFilterOptions,
    handleResolutionChange,
    handleDownload,
    resetImgState,
  } = useHaduriFilter();

  return (
    <Flex as="main" direction="column" gap="16px" p="10px" m="16px">
      {compressedImage && (
        <Flex
          as="section"
          direction={isLg ? 'column' : 'row'}
          gap={isLg ? '40px' : '0'}
          mb={isLg ? '0' : '26px'}
          justifyContent="space-around"
        >
          <Instructions />
          <DefaultFilterOptions
            image={image}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            handleResolutionChange={handleResolutionChange}
            resetImgState={resetImgState}
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
          h={filterOptions?.isLargeMode ? '700px' : '500px'}
          overflowY="scroll"
        >
          {FILTER_OPTIONS.map(({ id, style, name }) => (
            <FilterCard
              key={id}
              style={style}
              name={name}
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
              compressedImage={compressedImage}
              handleDownload={handleDownload}
            />
          ))}
        </Flex>
      ) : (
        <Uploader setImage={setImage} />
      )}
    </Flex>
  );
};

export default HaduriFilter;
