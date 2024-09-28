import React,{useCallback, useContext, useEffect} from 'react'
import Key from './Key'
import { AppContext } from '../App'
const Keyboard = () => {
  const {onDelete,onSelectLetter,onEnter} = useContext(AppContext)
  const handleKeyboard= useCallback((event)=>{
    if(event.key==="Enter"){
      onEnter()
    }else if (event.key==="Backspace"){
      onDelete()
    }else{
    const char = event.key.toLowerCase();
    const validStrokes = 'abcdefghijklmnopqrstuvwxyz';
    if (validStrokes.includes(char)) { // Directly check if the char is valid
      onSelectLetter(char);
    }
  }
      
  },[onEnter, onDelete, onSelectLetter])
  useEffect(()=>{
    document.addEventListener("keydown",handleKeyboard)
    return ()=>{
    document.removeEventListener("keydown",handleKeyboard)

    }
  },[handleKeyboard])


  const row_1 = ["q","w","e","r","t","y","u","i","o","p"]
  const row_2 = ["a","s","d","f","g","h","j","k","l"]
  const row_3 = ["enter","z","x","c","v","b","n","m","del"]

  return (
    <div className='inline-flex  items-center flex-col justify-center gap-3' onKeyDown={handleKeyboard} >
      <div className="inline-flex  justify-center items-center gap-1 sm:gap-2">
        {
          row_1.map((e, index) => (
            <Key key={index} val={e} />
          ))
        }
      </div>
      <div className="inline-flex  justify-center items-center gap-1 sm:gap-2">
      {
          row_2.map((e, index) => (
            <Key key={index} val={e} />
          ))
        }
      </div>
      <div className="inline-flex  justify-center items-center gap-1 sm:gap-2">
      {
          row_3.map((e, index) => (
            <Key key={index} val={e} />
          ))
        }
      </div>

    </div>
  )
}

export default Keyboard
