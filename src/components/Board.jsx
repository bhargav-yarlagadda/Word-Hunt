import React, { useState } from 'react';
;
import Letter from './Letter';

const Board = () => {
 

  return (
    <div className='flex flex-col '>
      {Array.from({ length: 6 }).map((_, attemptValue) => (
        <div className="flex gap-4" key={attemptValue}>
          {Array.from({ length: 5 }).map((_, letterPos) => (
            <Letter letterPos={letterPos} attemptValue={attemptValue} key={letterPos} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
