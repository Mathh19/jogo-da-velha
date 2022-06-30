import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { Button } from './Styled';
import t from 'prop-types';

export default function Square({ value, index }) {
  const {
    state: { squares, isXNext, whoIsWinner },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';

    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares });
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
