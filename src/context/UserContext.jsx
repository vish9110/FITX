import { createContext, useState } from 'react';
import { exercises } from '../exercises';
export const dataContext  = createContext();
function UserContext({children}) {

    let [input,setInput] = useState("")
    
    let data={
        input,
        setInput,
    };
  return (
    <div>
        <dataContext.Provider value = {data}>
                {children}
        </dataContext.Provider>
    
      
    </div>
  )
}

export default UserContext
