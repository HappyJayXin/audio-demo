import { useState, useEffect } from 'react';
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';

import { Wrapper, Button } from './styled';
import Loading from '../../component/Loading';

interface IProps {
  file: string;
}

const Control = ({ file }: IProps) => {
  const { togglePlayPause, mute, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
  });
  const { seek } = useAudioPosition({ highRefreshRate: true });

  const [muted, setMuted] = useState(false);

  useEffect(() => {
    mute(muted);
  }, [muted]);

  return (
    <Wrapper>
      {ready && !loading ? (
        <>
          <Button onClick={togglePlayPause}>{playing ? 'Stop' : 'Play'}</Button>
          <Button onClick={() => seek(0)}>Restart</Button>
          <Button onClick={() => playing && setMuted((lastState) => !lastState)}>Mute</Button>
        </>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default Control;
