import styled from 'styled-components';

interface IProps {
  duration: number;
  position: number;
}

const Time = styled.div`
  margin-top: 10px;
`;

const formatTime = (seconds: number): string => {
  const floored = Math.floor(seconds);
  let from = 14;
  let length = 5;
  if (floored >= 3600) {
    from = 11;
    length = 8;
  }

  return new Date(floored * 1000).toISOString().substr(from, length);
};

const TimeLabel = ({ duration, position }: IProps) => {
  if (duration === Infinity) return null;

  return <Time>{`${formatTime(position)} / ${formatTime(duration)}`}</Time>;
};

export default TimeLabel;
