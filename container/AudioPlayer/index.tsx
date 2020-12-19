interface IFile {
  file: string;
}

import Tracker from '../Tracker';
import Control from '../Control';
import { Container, Wrapper } from './styled';

const AudioPlayer = ({ file }: IFile) => {
  return (
    <Container>
      <Wrapper>
				<Tracker />
				<Control />
      </Wrapper>
    </Container>
  );
};

export default AudioPlayer;
