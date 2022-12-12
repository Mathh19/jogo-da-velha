import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GameContext } from '../contexts/GameContext';
import calculateWinner from '../utils/calculateWinner';

import Player from '../Player/Player';
import Reset from '../Reset/Reset';
import Winner from '../Winner/Winner';
import History from '../History/History';

import Square from '../Square/Square';
import { BoardContainer } from './Styled.js';

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      dispatch({ type: 'ADD_WINNER', payload: winner });
    }
  }, [dispatch, squares, history]);

  return (
    <BoardContainer>
      <Player />
      <Winner />
      <Reset />
      <div className="Board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuidv4()} />
        ))}
      </div>

      <History />
    </BoardContainer>
  );
}
