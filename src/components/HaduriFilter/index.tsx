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
    filterOptions,
    setFilterOptions,
    handleResolutionChange,
  } = useHaduriFilter();

  return (
    <Flex as="main" direction="column" gap="16px" p="10px" m="16px">
      {compressedImage && (
        <Flex as="section" justifyContent="space-around">
          <Instructions />
          <DefaultFilterOptions
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
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
          h={filterOptions?.isLargeMode ? '700px': '500px'}
          overflowY="scroll"
          overscrollBehaviorY="none"
        >
          {FILTER_OPTIONS.map(({ id, style, name }) => (
            <FilterCard
              key={id}
              style={style}
              name={name}
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
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
