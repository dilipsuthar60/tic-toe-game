import { useEffect, useState } from "react";

const useTicToe = (boardNumber ) => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(boardNumber*boardNumber).fill(null));
  const [patterns, setPatterns] = useState([]);
  useEffect(() => {
    setBoard(()=>Array(boardNumber*boardNumber).fill(null))
    const WINNER_PATTERN = [];
    const clockDigonal = [];
    for (let i = 0; i < boardNumber; i++) {
      const possible = [];
      for (let j = 0; j < boardNumber; j++) {
        if (i === j) clockDigonal.push(i * boardNumber + j);
        possible.push(i * boardNumber + j);
      }
      WINNER_PATTERN.push(possible);
    }
    for (let j = 0; j < boardNumber; j++) {
      const possible = [];
      for (let i = 0; i < boardNumber; i++) {
        possible.push(i * boardNumber + j);
      }
      WINNER_PATTERN.push(possible);
    }
    const possible = [];
    for (let j = boardNumber - 1; j >= 0; j--) {
      possible.push(j);
    }
    WINNER_PATTERN.push(clockDigonal);
    WINNER_PATTERN.push(possible);
    setPatterns(WINNER_PATTERN);
    console.log(WINNER_PATTERN);
  }, [boardNumber]);
  const calculateWinner = (board) => {
    console.log(board,boardNumber)
    for (let pattern of patterns) {
      if (board[pattern[0]] !== null) {
        let currentValue = board[pattern[0]];
        let counter = 0;
        for (let val of pattern) {
          if (board[val] == currentValue) {
            counter++;
          }
        }
        if (counter == boardNumber) return currentValue;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const copyBoard = [...board];
    copyBoard[index] = turn ? "X" : "0";
    setBoard(copyBoard);
    setTurn(!turn);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner !== null) return `Player ${winner}  is wins!`;
    else if (!board.includes(null)) return "Match is draw";
    return `Turn is ${turn ? "X" : "0"}`;
  };

  const handleReset = () => {
    setBoard(Array(boardNumber * boardNumber).fill(null));
    setTurn(true);
  };

  return {
    turn,
    setTurn,
    board,
    getStatusMessage,
    setBoard,
    handleClick,
    handleReset,
  };
};

export default useTicToe;
