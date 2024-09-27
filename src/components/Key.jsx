import React, { useContext } from 'react';
import { AppContext } from '../App';

const Key = ({ val }) => {
    const { board, setBoard } = useContext(AppContext);
    const { currAttempt, setCurrAttempt } = useContext(AppContext);

    

    const selectLetter = (val) => {
      const { letterPos, attempt } = currAttempt;
  
      if (val === "enter") {
          // Allow submission only if at least 5 letters have been entered
          if (letterPos < 4) return; 
        

          setCurrAttempt(prev => ({ ...prev, attempt: attempt + 1, letterPos: 0 })); // Reset letterPos for the next attempt
      } else if (val === "del") {
          // Handle delete functionality
          const newBoard = [...board];
          if (letterPos > 0) {
              newBoard[attempt][letterPos - 1] = ''; // Clear the previous letter
              setBoard(newBoard);
              setCurrAttempt(prev => ({ ...prev, letterPos: letterPos - 1 }));
          }
      } else {
          // Add letter if within valid position
          if (letterPos < 5) {
              const newBoard = [...board];
              newBoard[attempt][letterPos] = val.toUpperCase();
              setBoard(newBoard);
              setCurrAttempt(prev => ({ ...prev, letterPos: letterPos + 1 }));
          }
      }
  };
  

    return (
        <div
            className={`flex cursor-pointer hover:bg-red-600 items-center rounded-md justify-center font-thin text-[14px] sm:text-[18px] lg:text-2xl text-white bg-gray-600 md:w-[40px] md:h-[40px] w-[30px] h-[30px] text-sm lg:w-16 lg:h-16 flex-wrap 
            ${val === "enter" || val === "del" ? "w-[60px] md:w-[65px] lg:w-32" : ""}`}
            onClick={() => selectLetter(val)}
        >
            <span>{val.toUpperCase()}</span>
        </div>
    );
}

export default Key;
