import styled from 'styled-components';
import FontsSets from '../../assets/fonts/Fonts';

export const Button = styled.button`
  ${FontsSets}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  font-family: 'Splash', cursive;
  background: none;
  border: none;
  /* border: 1.5px solid #ccc; */
  cursor: pointer;
  /* &:hover {
    border-color: red;
    transition: ease-in-out 300ms;
  } */
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
