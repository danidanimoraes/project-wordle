import React from "react";
import Keyboard from "../Keyboard/Keyboard";

const initialGuess = "";

function GuessInput({ handleAddGuess, ended }) {
  const [guess, setGuess] = React.useState(initialGuess);

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log({ guess });
    setGuess(initialGuess);
    handleAddGuess(guess);
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleClickKey = (key) => {
    if (key === "enter") {
      if (guess.length !== 5) {
        alert("Word must have 5 letters!");
        return;
      }

      handleSubmit();
      return;
    }

    if (key === "backspace") {
      const newGuess = guess.slice(0, guess.length - 1);
      setGuess(newGuess);
      return;
    }

    const newGuess = guess.concat(key);
    if (newGuess.length > 5) {
      alert("Maximum length of 5 letters!");
      return;
    }

    setGuess(newGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        disabled={ended}
      />
      <Keyboard onClickKey={handleClickKey} />
    </form>
  );
}

export default GuessInput;
