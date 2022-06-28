import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Player from '../Player/Player';
import Reset from '../Reset/Reset';
import Square from '../Square/Square';
import { BoardContainer, Boards } from './styled';

export default function Board() {
  const { squares } = useContext(GameContext);

  return (
    <BoardContainer>
      <Player />
      <Reset />
      <Boards className="Board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </Boards>
    </BoardContainer>
  );
}
