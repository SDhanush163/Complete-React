import React, { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelect = (row, col) => {
        // Immutably updating the array
        setGameBoard((prev) => {
            const updatedBoard = [...prev.map((inner) => [...inner])];
            updatedBoard[row][col] = "X";
            return updatedBoard;
        });
    };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelect(rowIndex, colIndex)
                                    }
                                >
                                    {col}
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
