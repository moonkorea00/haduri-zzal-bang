import { Dispatch, SetStateAction } from 'react';
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react';
import Range from '../Range';
import { filterOptionsProps } from '@types';

type DefaultFilterOptionsProps = {
  filterOptions: filterOptionsProps;
  setFilterOptions: Dispatch<SetStateAction<filterOptionsProps>>;
  handleResolutionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DefaultFilterOptions = ({
  filterOptions,
  setFilterOptions,
  handleResolutionChange,
}: DefaultFilterOptionsProps) => {

  return (
    <Flex>
      <Flex direction="column" gap="4px">
        <Flex justifyContent="space-between">
          <Text as="span" fontSize="lg" fontWeight="600">
            화질
          </Text>
          <Text as="span" ml="16px">
            {filterOptions?.resolution}
          </Text>
        </Flex>
        <Range
          min={0}
          max={1}
          step={0.02}
          value={filterOptions?.resolution}
          handleChange={handleResolutionChange}
          width={400}
        />
        <FormControl
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="6px"
        >
          <FormLabel
            as="span"
            htmlFor="isChecked"
            fontSize="lg"
            fontWeight="600"
            mb="0"
          >
            하두리 배너 사용
          </FormLabel>
          <Switch
            id="isChecked"
            defaultChecked={true}
            value={String(filterOptions?.isUseWaterMark)}
            onChange={() =>
              setFilterOptions({
                ...filterOptions,
                isUseWaterMark: !filterOptions?.isUseWaterMark,
              })
            }
          colorScheme="orange"
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default DefaultFilterOptions;
