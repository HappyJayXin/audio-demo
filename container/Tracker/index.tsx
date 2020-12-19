import Progress from '../../component/Progress';
import { Wrapper, Time } from './styled';

const Tracker = () => {
  return (
    <Wrapper>
      <Progress />
      <Time>0:01 / 3:42</Time>
    </Wrapper>
  );
};

export default Tracker;
