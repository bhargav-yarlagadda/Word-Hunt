import React, { createContext,useEffect,useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { defaultBoard,words } from './utils/words'
export const AppContext = createContext()
const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0})
  const [correctWord,setCorrectWord]= useState("RIGHT")

  
  useEffect(() => {
    const wordList = [...words];

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const index = getRndInteger(0, wordList.length - 1); // Use wordList.length to avoid hardcoding
    console.log(wordList[index]);
    setCorrectWord(wordList[index].toUpperCase());
  }, []);

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
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onDelete,onSelectLetter,correctWord,setCorrectWord}} >
      <Board/>
      <Keyboard/>
      </AppContext.Provider>

    </div>
    </>
  )
}

export default App
