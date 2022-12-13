import React from "react";
import "../App.css";

function TicTacToeBoard({ ctx, G, moves, ...props }) {
  const onClick = (id) => moves.clickCell(id);

  function isActive(id) {
    if (props.isActive) return false;
    if (G.cells[id] !== null) return false;
    return true;
  }

  let winner = "";

  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
        <div id="winner">
          Winner:{" "}
          <img
            alt=""
            className="monkeyAnim"
            src="https://thumbs.gfycat.com/AgileColorfulIaerismetalmark-max-1mb.gif"
          />
        </div>
      ) : (
        <div id="winner">Draw!</div>
      );
  }

  const cellStyle = {
    border: "0px solid #555",
    width: "100px",
    height: "100px",
    textAlign: "center",
  };

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id}>
          {G.cells[id] ? (
            <div style={cellStyle}>{G.cells[id]}</div>
          ) : (
            <button style={cellStyle} onClick={() => onClick(id)} />
          )}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
}
export default TicTacToeBoard;
