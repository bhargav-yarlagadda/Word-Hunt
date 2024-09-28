import React, { createContext,useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { defaultBoard } from './utils/words'
export const AppContext = createContext()
const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0})

  const onSelectLetter=(val)=>{
    const {attempt,letterPos}= currAttempt 
    const newBoard = [...board];
    newBoard[attempt][letterPos] = val.toUpperCase();
    setBoard(newBoard);
    setCurrAttempt(prev => ({ ...prev, letterPos: letterPos+1 }))
  }
  const onDelete=()=>{
    const {attempt,letterPos}= currAttempt
    const newBoard = [...board];
    if (letterPos > 0) {
        newBoard[attempt][letterPos - 1] = ''; // Clear the previous letter
        setBoard(newBoard);
        setCurrAttempt(prev => ({ ...prev, letterPos: letterPos - 1 }));
    }
  }
  const onEnter=()=>{
    const {letterPos,attempt}= currAttempt
    if(letterPos<5){
      return
    }

    setCurrAttempt({letterPos:0,attempt:attempt+1})
  }
  return (
    <>
    <Header/>
    <div className='flex flex-wrap items-center lg:flex-row justify-around h-[90vh] flex-col items-between  lg:justify-around' >
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onDelete,onSelectLetter}} >
      <Board/>
      <Keyboard/>
      </AppContext.Provider>

    </div>
    </>
  )
}

export default App
