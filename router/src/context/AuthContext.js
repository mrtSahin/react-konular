import { createContext, useContext, useEffect, useState } from "react";

const Contex = createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')) || false ) // localstorage da bir şey varsa onu yükle yoksa false yükle
    const data={user,setUser}

    // sayfayı her yenilediğimizde login sayfasına gidiyor. çünkü en başta her zaman user a false değer yüklüyor
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))
    },[user])// user değiştiğinde localstorage a kaydediyoruz.


return(
    <Contex.Provider value={data}>
        {children}
    </Contex.Provider>
)
}

export const useAuth=()=>useContext(Contex)