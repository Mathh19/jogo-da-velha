import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  background: none;
  border: 1.5px solid #ccc;
  cursor: pointer;
  &:hover {
    border-color: red;
    transition: ease-in-out 300ms;
  }
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
