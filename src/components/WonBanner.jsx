import React from 'react';

const WonBanner = ({ setWon, resetGame }) => {
  const handlePlayAgain = () => {
    setWon(false);
    resetGame(); // Call resetGame to reset the board and state
  };

  return (
    <div className='w-screen z-10 absolute top-0 h-screen flex backdrop-blur-sm bg-opacity-50 bg-[#CDC1FF] justify-center items-center'>
      <div className=' bg-opacity-30 bg-[#FFD3A3] backdrop-blur-3xl flex flex-col py-24 justify-center items-center p-8 rounded-lg shadow-lg text-center md:transform md:transition-transform md:backdrop:duration-300 md:hover:scale-105'>
        <span className='text-2xl font-bold text-black'>Congrats! You have guessed the word!</span>
        <button 
          onClick={handlePlayAgain} 
          className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default WonBanner;
