import React from "react";

const initialGuess = "";

function GuessInput() {
  const [guess, setGuess] = React.useState(initialGuess);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      alert("Word needs to have 5 letters!");
      return;
    }

    console.log({ guess });
    setGuess(initialGuess);
  };

  const handleChange = (e) => {
    if (guess.length >= 5) {
      alert("Maximum of 5 letters!");
    } else {
      setGuess(e.target.value.toUpperCase());
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
