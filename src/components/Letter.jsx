import React, { useContext } from 'react'
import { AppContext } from '../App'

const Letter = ({letterPos,attemptValue}) => {
    const {board} = useContext(AppContext)
    const letter = board[attemptValue][letterPos]
  return (
    <div className='text-white cursor-none hover:scale-105 flex items-center justify-center text-2xl lg:text-[40px] w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] bg-gray-800 my-2 border-[1px] rounded-sm lg:rounded-md border-black
    ' >{letter}</div>
  )
}

export default Letter