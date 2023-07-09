import SetupContext from "./SetupContext";
import { useState } from "react";


const UserState = (props) => {
  const [number, setNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState('personal');
  const [move, setMove] = useState(false)
  
 
  
  
 

  


  return (
    <SetupContext.Provider value={{number,setNumber,destination, setDestination, mode , setMode, move, setMove}}>
      {props.children}
    </SetupContext.Provider>
  )
  
}

export default UserState
