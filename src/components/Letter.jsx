import React, { useContext } from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPos, attemptValue }) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptValue][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  // Ensure the letterState is correctly set based on the current attempt
  const letterState = currAttempt.attempt > attemptValue
    ? (correct ? "correct" : almost ? "almost" : "neutral")
    : "";

  return (
    <div
      className={`text-white cursor-none hover:scale-105 flex items-center justify-center text-2xl lg:text-[40px] w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] my-2 border-[1px] rounded-sm lg:rounded-md border-black
      ${letterState === "correct" ? "bg-green-900" : letterState === "almost" ? "bg-orange-600" : "bg-gray-800"}
      `}
    >
      {letter}
    </div>
  );
};

export default Letter;
