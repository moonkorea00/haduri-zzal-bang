import { Flex } from '@chakra-ui/react';
import Instructions from '@components/HaduriFilter/Instructions';
import DefaultFilterOptions from '@components/HaduriFilter/DefaultFilterOptions';
import FilterCard from '@components/HaduriFilter/FilterCard';
import Uploader from '@components/Uploader';
import useHaduriFilter from '@hooks/useHaduriFilter';
import { FILTER_OPTIONS } from '@utils';

const HaduriFilterView = () => {
  const {
    setImage,
    compressedImage,
    resolution,
    selectedFilter,
    setSelectedFilter,
    handleResolutionChange,
  } = useHaduriFilter();

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

export default HaduriFilterView;
