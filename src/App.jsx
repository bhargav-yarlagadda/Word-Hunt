import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import WonBanner from './components/WonBanner';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard, words } from './utils/words';

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [won, setWon] = useState(false);

  const generateNewWord = () => {
    const wordList = [...words];
    const index = Math.floor(Math.random() * wordList.length);
    console.log(wordList[index])
    setCorrectWord(wordList[index].toUpperCase());
  };

  useEffect(() => {
    generateNewWord();
  }, []);

  const resetGame = () => {
    setBoard(defaultBoard);
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    generateNewWord(); // Generate a new word when resetting the game
  };

  const onSelectLetter = (val) => {
    const { attempt, letterPos } = currAttempt;
    const newBoard = [...board];
    newBoard[attempt][letterPos] = val.toUpperCase();
    setBoard(newBoard);
    setCurrAttempt(prev => ({ ...prev, letterPos: letterPos + 1 }));
  };

  const onDelete = () => {
    const { attempt, letterPos } = currAttempt;
    const newBoard = [...board];
    if (letterPos > 0) {
      newBoard[attempt][letterPos - 1] = ''; // Clear the previous letter
      setBoard(newBoard);
      setCurrAttempt(prev => ({ ...prev, letterPos: letterPos - 1 }));
    }
  };

  const onEnter = () => {
    const { letterPos, attempt } = currAttempt;
    const currWord = board[attempt].join("");
    if (letterPos < 5) {
      return;
    }
    if (correctWord === currWord) {
      setWon(true);
    }
    setCurrAttempt({ letterPos: 0, attempt: attempt + 1 });
  };

  return (
    <>
      <div className='flex flex-wrap items-center lg:flex-row justify-around h-[90vh] flex-col items-between lg:justify-around'>
        <Header />
        {won && <WonBanner setWon={setWon} resetGame={resetGame} />}
        <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onEnter, onDelete, onSelectLetter, correctWord, setCorrectWord }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </>
  );
};

export default App;
