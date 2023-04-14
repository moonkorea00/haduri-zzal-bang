import { useState, RefObject } from 'react';

const useAudioPlayer = (ref: RefObject<HTMLAudioElement>) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (ref.current) {
      ref.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (ref.current) {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  return { isPlaying, handlePlay, handlePause };
};

export default useAudioPlayer;
