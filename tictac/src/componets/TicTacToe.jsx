import React, { useState } from 'react';
import '../index.css'
// Square Component for individual squares
const Square = React.memo(({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
});

// Board Component to handle the 3x3 board state
const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Game board state
  const [isXNext, setIsXNext] = useState(true); // Track whose turn it is
  const [winner, setWinner] = useState(null); // Track the winner

  const handleClick = (index) => {
    if (squares[index] || winner) return; // Ignore if square is filled or game is over

    // Copy the squares array to modify it (immutability)
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    // Check for winner after every move
    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="game">
      <Board squares={squares} onClick={handleClick} />
      {winner ? (
        <div className="status">
          <h2>Winner: {winner}</h2>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      ) : (
        <div className="status">
          <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
