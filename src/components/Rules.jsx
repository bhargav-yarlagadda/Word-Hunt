import React from 'react';

const Rules = () => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-[80vw] max-h-[80vh]  overflow-hidden absolute top-0 right-5 mx-auto z-10 mt-10">
      <h2 className=" text-md md:text-3xl  font-bold text-center md:mb-6 text-white">Wordhunt Rules</h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-300 text-base md:text-lg">
        <li>
          <strong className="text-white">Objective:</strong> The goal is to guess the hidden 5-letter word within six tries.
        </li>
        <li>
          <strong className="text-white">Guessing:</strong> Enter a valid 5-letter word and press Enter. You have six attempts to guess the correct word.
        </li>
        <li>
          <strong className="text-white">Feedback:</strong> After each guess, the color of the letters will change to provide hints:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <span className="text-green-400 font-bold">Green:</span> The letter is in the word and in the correct position.
            </li>
            <li>
              <span className="text-orange-400 font-bold">Orange:</span> The letter is in the word but in the wrong position.
            </li>
            <li>
              <span className="text-white font-bold">White:</span> The letter is not in the word.
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-white">Word Length:</strong> The hidden word is always exactly 5 letters long.
        </li>
        <li>
          <strong className="text-white">Winning:</strong> You win if you guess the word correctly within 6 tries.
        </li>
        <li>
          <strong className="text-white">Losing:</strong> If you don't guess the word in 6 attempts, the correct word will be revealed.
        </li>
        <li>
          <strong className="text-white">Valid Words:</strong> Only valid English words are allowed as guesses.
        </li>
      </ol>
    </div>
  );
};

export default Rules;
