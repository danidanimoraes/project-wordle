import React from "react";

const LETTERS = "QWERTYUIOP/ASDFGHJKL/ZXCVBNM";

function Keyboard({ onClickKey }) {
  return (
    <span className="keyboard">
      {LETTERS.split("/").map((letters, rowIndex) => {
        return (
          <span
            style={{ display: "flex", gap: "3px" }}
            key={`row-wrapper-${rowIndex}`}
          >
            {rowIndex === 2 && (
              <span className="key" onClick={() => onClickKey("enter")}>
                ENTER
              </span>
            )}
            <span className="keyboard-row">
              {letters.split("").map((letter) => {
                return (
                  <span
                    className="key"
                    key={`letter-${letter}`}
                    onClick={() => onClickKey(letter)}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
            {rowIndex === 2 && (
              <span className="key" onClick={() => onClickKey("backspace")}>
                🢠
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

export default Keyboard;
