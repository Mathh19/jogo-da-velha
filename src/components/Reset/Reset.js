import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { ResetP } from './Styled';

export default function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } =
    useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
    setHistory([]);
  }

  return (
    <ResetP>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </ResetP>
  );
}
