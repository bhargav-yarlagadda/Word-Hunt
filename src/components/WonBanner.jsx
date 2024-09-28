import React from 'react';

const WonBanner = ({ setWon }) => {
  return (
    <div className='w-screen z-10 absolute top-0 h-screen flex backdrop-blur-sm bg-opacity-70 bg-gray-900 justify-center items-center'>
      <div className='bg-[#FFEB55] flex flex-col justify-center items-center bg-opacity-45 p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105'>
        <span className='text-2xl font-bold text-gray-800'>Congrats! You have guessed the word!</span>
        <button 
          onClick={() => { setWon(false); }} 
          className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200'
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default WonBanner;
