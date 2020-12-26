import { useEffect, useState, useCallback, useRef, MouseEvent } from 'react';
import { Wrapper, Bar } from './styled';
import { useAudioPosition } from 'react-use-audio-player';

const Progress = () => {
  const { percentComplete, seek } = useAudioPosition({ highRefreshRate: true });
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    setWidth(`${percentComplete}%`);
  }, [percentComplete]);

  return (
    <Wrapper>
      <Bar width={width} />
    </Wrapper>
  );
};

export default Progress;
