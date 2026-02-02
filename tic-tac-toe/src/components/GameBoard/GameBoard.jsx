import React, { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
    /*----------------------------------------------------------------
    This functionality has been lifted up to the App Component
    ------------------------------------------------------------------
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (row, col) => {
        // Immutably updating the array
        setGameBoard((prev) => {
            const updatedBoard = [...prev.map((inner) => [...inner])];
            updatedBoard[row][col] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    };
    ----------------------------------------------------------------*/

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    disabled={playerSymbol !== null}
                                    onClick={() =>
                                        onSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};

export default GameBoard;
