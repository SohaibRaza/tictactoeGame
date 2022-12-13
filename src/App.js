import { Client } from 'boardgame.io/react';
import TicTacToeBoard from "./components/TicTacToeBoard";
import TicTacToe from "./components/game";

import "./App.css";

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  ai: {
    enumerate: (G) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    },
  },
});

export default App;
