import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { PlayerTitle } from './Styled.js';

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return <PlayerTitle>Player: {isXNext ? 'X' : 'O'}</PlayerTitle>;
}
