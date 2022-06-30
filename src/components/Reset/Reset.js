import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { ResetP } from './Styled';

export default function Reset() {
  const { dispatch } = useContext(GameContext);

  function handleClick() {
    dispatch({ type: 'RESET' });
  }

  return (
    <ResetP>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </ResetP>
  );
}
