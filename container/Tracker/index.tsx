import { useAudioPosition } from 'react-use-audio-player';

import Progress from '../../component/Progress';
import TimeLabel from '../../component/TimeLabel';
import { Wrapper } from './styled';

const Tracker = () => {
  const { duration, position } = useAudioPosition({ highRefreshRate: true });

  return (
    <Wrapper>
      <Progress />
      <TimeLabel duration={duration} position={position} />
    </Wrapper>
  );
};

export default Tracker;
