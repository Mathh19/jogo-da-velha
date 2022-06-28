import React from 'react';
import './Home.css';
import Board from '../../components/Board/Board';
import GameContextProvider from '../../components/contexts/GameContext';

export default function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
