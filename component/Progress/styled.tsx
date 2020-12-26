import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  background: #d0d8e6;
  height: 6px;
  margin-top: 10px;
  position: relative;
`;

interface IBarProps {
  width: string;
}

export const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ width }: IBarProps) => width};
  height: inherit;
  background: #000;
`;
