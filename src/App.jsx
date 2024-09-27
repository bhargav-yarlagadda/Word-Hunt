import React, { createContext,useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { defaultBoard } from './utils/words'
export const AppContext = createContext()
const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <>
    <Header/>
    <div className='flex flex-wrap items-center lg:flex-row justify-around h-[90vh] flex-col items-between  lg:justify-around' >
      <AppContext.Provider value={{board,setBoard}} >
      <Board/>
      <Keyboard/>
      </AppContext.Provider>

    </div>
    </>
  )
}

export default App
