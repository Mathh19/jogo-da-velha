import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GameContext } from '../contexts/GameContext';
import { HistoryDiv } from './Styled';

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] });
  }

  return (
    <HistoryDiv>
      {history.map((data, index) => (
        <div key={uuidv4()}>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </HistoryDiv>
  );
}
