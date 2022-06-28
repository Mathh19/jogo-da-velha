import styled from 'styled-components';

export const BoardContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
