import React from "react";

const initialGuess = "";

function GuessInput({ handleAddGuess, ended }) {
  const [guess, setGuess] = React.useState(initialGuess);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess(initialGuess);
    handleAddGuess(guess);
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
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
    </form>
  );
}

export default GuessInput;
