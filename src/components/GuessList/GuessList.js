import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const getEmptyArray = (size) => {
  return Array(size).fill();
};

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {getEmptyArray(NUM_OF_GUESSES_ALLOWED).map((_row, rowIndex) => {
        const checkedGuess = checkGuess(guesses[rowIndex]?.value, answer);
        return (
          <GuessRow
            key={`guessRow-${rowIndex}`}
            word={checkedGuess}
            index={rowIndex}
          />
        );
      })}
    </div>
  );
}

function GuessRow({ word, index }) {
  return (
    <p className="guess">
      {getEmptyArray(5).map((_col, colIndex) => {
        const cell = word?.[colIndex];
        return (
          <span
            className={`cell${cell?.status ? " " + cell?.status : ""}`}
            key={`guessCell-${index}.${colIndex}`}
          >
            {cell?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default GuessList;
