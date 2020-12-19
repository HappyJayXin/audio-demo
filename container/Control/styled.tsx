import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eef3f7;
  width: 450px;
  height: 100px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 15px 35px -5px rgba(206, 206, 206, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.h5`
  padding: 30px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  transition: opacity 0.2s;
  user-select: none;

  &:hover {
    opacity: 0.5;
  }
`;
