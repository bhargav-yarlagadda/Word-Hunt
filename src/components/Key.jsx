import React, { useContext } from 'react'
import { AppContext } from '../App'
const Key = ({val}) => {
    const {board,setBoard} = useContext(AppContext)

    const selectLetter = (val)=>{
        const currentBoard = [...board]
        currentBoard[0][0] = val 
        setBoard(currentBoard)

    }

  return (
    <div className={`flex cursor-pointer hover:bg-red-600 items-center rounded-md justify-center font-thin tex-[14px] sm:text-[18px] lg:text-2xl text-white bg-gray-600 md:w-[40px] md:h-[40px] w-[30px] h-[30px] text-sm lg:w-16 lg:h-16 flex-wrap 
        ${val=="enter"|| val==="del" ?"w-[45px] lg:w-32":""}`}

    onClick={()=>selectLetter(val)}
    >
        <span>{val.toUpperCase()}</span>
    </div>
  )
}

export default Key