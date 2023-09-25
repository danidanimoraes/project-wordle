import React from "react";
import GuessList from "../GuessList/GuessList";

const initialGuess = "";

function GuessInput() {
  const [guess, setGuess] = React.useState(initialGuess);
  const [guessList, setGuessList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess(initialGuess);
    setGuessList([...guessList, { id: crypto.randomUUID(), value: guess }]);
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  return (
    <>
      <GuessList guesses={guessList} />
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
        />
      </form>
    </>
  );
}

export default GuessInput;
