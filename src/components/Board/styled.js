import styled from 'styled-components';

export const BoardContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  .Board {
    background-size: cover;
    background-image: url('https://res.cloudinary.com/ddiiakz1t/image/upload/co_rgb:ffffff,q_100/v1670841996/jogo-da-velha-removebg-preview_ka6val.webp');
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
