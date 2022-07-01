import styled from 'styled-components';

export const HistoryDiv = styled.div`
  div {
    text-align: center;
    margin: 10px;
  }

  button {
    background-color: #000;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    &:hover {
      background-color: #4d4d4d;
      transition: ease-in-out 300ms;
    }
  }
`;
