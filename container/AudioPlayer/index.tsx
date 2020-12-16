interface IFile {
  file: string;
}

import { Wrapper } from './styled';

const AudioPlayer = ({ file }: IFile) => {
  return <Wrapper>file: {file}</Wrapper>;
};

export default AudioPlayer;
