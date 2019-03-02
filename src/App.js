import React, { Component } from 'react';
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import TicTacToeBoard from './components/TicTacToeBoard'
import { AI } from 'boardgame.io/ai';
import './App.css';
import './board.css'
import TicTacToe from './components/game'

const App = Client({ 
  game: TicTacToe ,
  board: TicTacToeBoard,
  ai: AI({
    enumerate: G => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    }
  })

});

export default App;
