import React,{useState} from "react";
import "../App.css";
import useTicToe from "../hook/useTicToe";
const TicToe = ({ boardNumber }) => {
  const {board, handleClick, getStatusMessage, handleReset } =
    useTicToe(boardNumber);
  return (
    <div style={{ width: `${100 * boardNumber}px` }}>
      <div className="status">
        <div>{getStatusMessage()}</div>
        <button onClick={handleReset}> Reset Game</button>
      </div>
      <div
        className="board"
        style={{display: "grid", gridTemplateColumns: `repeat(${boardNumber},1fr)` }}
      >
        {board.map((b, index) => {
          return (
            <button
              onClick={() => handleClick(index)}
              className="cell"
              key={index}
              disabled={b !== null}
            >
              {board[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicToe;
