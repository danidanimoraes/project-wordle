import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const getEmptyArray = (size) => {
  return Array(size).fill();
};

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {getEmptyArray(NUM_OF_GUESSES_ALLOWED).map((_row, rowIndex) => (
        <GuessRow
          key={`guessRow-${rowIndex}`}
          word={guesses[rowIndex]}
          index={rowIndex}
        />
      ))}
    </div>
  );
}

function GuessRow({ word, index }) {
  return (
    <p className="guess">
      {getEmptyArray(5).map((_col, colIndex) => (
        <span className="cell" key={`guessCell-${index}.${colIndex}`}>
          {word?.value[colIndex]}
        </span>
      ))}
    </p>
  );
}

export default GuessList;
