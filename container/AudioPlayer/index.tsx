import Tracker from '../Tracker';
import Control from '../Control';
import { Container, Wrapper } from './styled';

interface IProps {
  file: string;
}

const AudioPlayer = ({ file }: IProps) => (
  <Container>
    <Wrapper>
      <Tracker />
      <Control file={file} />
    </Wrapper>
  </Container>
);

export default AudioPlayer;
