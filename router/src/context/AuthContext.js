import { createContext, useContext, useState } from "react";

const Contex = createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(false)
    const data={user,setUser}
return(
    <Contex.Provider value={data}>

    </Contex.Provider>
)
}

export const useAuth=()=>useContext(Contex)