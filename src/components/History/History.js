import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { HistoryDiv } from './Styled';

export default function History() {
  const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
    useContext(GameContext);

  function handleClick(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].squares);
    setWhoIsWinner(history[index].whoIsWinner);
  }

  return (
    <HistoryDiv>
      {history.map((data, index) => (
        <div>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </HistoryDiv>
  );
}
