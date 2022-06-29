import styled from 'styled-components';

export const HistoryDiv = styled.div`
  div {
    text-align: center;
    margin: 10px;
  }

  button {
    background-color: #14bdac;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      background-color: #11a293;
      transition: ease-in-out 300ms;
    }
  }
`;
