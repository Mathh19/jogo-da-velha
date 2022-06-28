import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { ResetBtn, ResetP } from './styled';

export default function Reset() {
  const { setSquares, setIsXNext } = useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <ResetP>
      <ResetBtn type="button" onClick={handleClick}>
        Reset
      </ResetBtn>
    </ResetP>
  );
}
