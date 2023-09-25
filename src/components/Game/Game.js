import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/index";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [banner, setBanner] = React.useState("");

  const handleAddGuess = (guess) => {
    const isLastGuess = guessList.length === NUM_OF_GUESSES_ALLOWED - 1;
    const isRightAnswer = checkGuess(guess, answer).every(
      ({ _letter, status }) => status === "correct"
    );

    if (isLastGuess && !isRightAnswer) {
      setBanner("sad");
    }

    if (isRightAnswer) {
      setBanner("happy");
    }

    setGuessList([...guessList, { id: crypto.randomUUID(), value: guess }]);
  };

  return (
    <>
      <GuessList guesses={guessList} answer={answer} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        ended={guessList.length === NUM_OF_GUESSES_ALLOWED}
      />
      {banner === "happy" && <HappyBanner numberOfGuesses={guessList.length} />}
      {banner === "sad" && <SadBanner />}
    </>
  );
}

export default Game;

const HappyBanner = ({ numberOfGuesses }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
};

const SadBanner = () => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};
