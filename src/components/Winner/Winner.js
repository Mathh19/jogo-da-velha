import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { WinnerP } from './Styled';

export default function Winner() {
  const {
    state: { whoIsWinner, history },
  } = useContext(GameContext);

  if (!whoIsWinner && history.length === 9) return <WinnerP>Empate!!</WinnerP>;
  if (!whoIsWinner) return <></>;
  return <WinnerP>{whoIsWinner} ganhou!!</WinnerP>;
}
