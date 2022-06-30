import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { WinnerP } from './Styled';

export default function Winner() {
  const {
    state: { whoIsWinner },
  } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <WinnerP>{whoIsWinner} ganhou!!</WinnerP>;
}
