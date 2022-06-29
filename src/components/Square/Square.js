import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { Button } from './Styled';
import t from 'prop-types';

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([
      ...history,
      {
        squares: [...squares],
        isNext: !isXNext,
        whoIsWinner,
      },
    ]);
  }

  return (
    <Button type="button" onClick={handleClick}>
      {value}
    </Button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: t.string,
  index: t.number.isRequired,
};
