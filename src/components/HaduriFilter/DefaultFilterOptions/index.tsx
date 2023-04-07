import { Flex, Text, Button } from '@chakra-ui/react';
import Range from '../Range';

type DefaultFilterOptionsProps = {
  resolution: number;
  handleResolutionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DefaultFilterOptions = ({
  resolution,
  handleResolutionChange,
}: DefaultFilterOptionsProps) => {
  return (
    <Flex>
      <Flex alignItems="center">
        <Text as="span">화질</Text>
        <Range
          min={0}
          max={1}
          step={0.02}
          value={resolution}
          handleChange={handleResolutionChange}
          width={400}
        />
        <Button size="sm" as="span">
          {resolution}
        </Button>
      </Flex>
    </Flex>
  );
};

export default DefaultFilterOptions;
