import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from '../container/AudioPlayer';

const Index = () => {
  return (
    <AudioPlayerProvider>
      <AudioPlayer file="music.mp3" />
    </AudioPlayerProvider>
  );
};

export default Index;
