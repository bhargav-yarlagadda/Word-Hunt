import React from 'react';
import  { AppContext } from '../App';
import { useContext } from 'react';
const ShowAnswer = ({ setWon, resetGame }) => {
    const {correctWord} = useContext(AppContext)
  const handlePlayAgain = () => {
    setWon(false);
    resetGame(); // Call resetGame to reset the board and state
  };

  return (
    <div className='w-screen z-10  absolute top-0 h-screen flex backdrop-blur-sm  bg-opacity-90 bg-[#000000] justify-center items-center ' >
      <div className='z-10 bg-opacity-40  cursor-default bg-[#8a8989] flex flex-col py-16 justify-center items-center px-24 rounded-lg shadow-lg text-center'>
        <span className='text-xl font-bold text-[#f5f5f5cb]'>Oops!! <br /> you have used all your attempts</span>
        <span>the correct word is </span>
        <span className='text-3xl montserrat'>{correctWord}</span>
        <button 
          onClick={handlePlayAgain} 
          className='mt-6 px-6 py-2 w-full bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ShowAnswer;
