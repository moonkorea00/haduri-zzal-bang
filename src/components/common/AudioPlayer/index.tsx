import { useRef } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import IconButton from '../Button';
import useAudioPlayer from './audioPlayer.hooks';
import useBreakPoints from '@hooks/useBreakPoints';
import { assetPaths } from '@utils/assets';

const AudioPlayer = () => {
  const playRef = useRef<HTMLAudioElement>(null);
  const { isSm } = useBreakPoints();
  const { handlePlay, handlePause } = useAudioPlayer(playRef);

  return (
    <Flex
      gap="4px"
      justifyContent="flex-end"
      alignItems="center"
      w="100%"
      minWidth="280px"
      p={isSm ? '5px' : '10px'}
    >
      <Text mr="4px" fontSize={isSm ? 'xs' : 'sm'}>
        &#127925;MC몽 - 아이스크림(2006)
      </Text>
      <IconButton setState={handlePlay} icon={BsFillPlayFill} label={'음악 재생'}/>
      <IconButton state={false} setState={handlePause} icon={BsFillPauseFill} label={'음악 일시 중지'}/>
      <audio src={assetPaths.audio} ref={playRef} />
    </Flex>
  );
};

export default AudioPlayer;
