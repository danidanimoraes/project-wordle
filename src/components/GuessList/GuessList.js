import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const getEmptyArray = (size) => {
  return Array(size).fill();
};

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {getEmptyArray(NUM_OF_GUESSES_ALLOWED).map((_row, rowIndex) => {
        const rowGuess = guesses[rowIndex];
        return (
          <p className="guess" key={`guessRow-${rowIndex}`}>
            {getEmptyArray(5).map((_col, colIndex) => {
              return (
                <span
                  className="cell"
                  key={`guessCell-${rowIndex}.${colIndex}`}
                >
                  {rowGuess?.value[colIndex]}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
