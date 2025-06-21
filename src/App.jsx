import { useState } from "react";
import Square from "./components/Square";
import calculateWinner from "./utils/utils";

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = ` Winner: ${winner} `;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "0");
  }

  function handleClick(i) {
    const newSquare = squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "0";
    }
    onPlay();
  }

  return (
    <>
      <div> {status} </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  };

  return (
    <div className="flex">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ol>
      </>
    </div>
  );
}
