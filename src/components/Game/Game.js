import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/index";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const handleAddGuess = (guess) => {
    setGuessList([...guessList, { id: crypto.randomUUID(), value: guess }]);
  };

  return (
    <>
      <GuessList guesses={guessList} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
