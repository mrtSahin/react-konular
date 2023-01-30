import { createContext, useContext, useReducer } from "react";
import { siteReducer } from "../reducer";

const Context = createContext()

export const useSite = () => useContext(Context)

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(siteReducer, {
        theme: localStorage.getItem('theme') || 'light', // eğer localStorage da theme diye bir değişken varsa o olsun yoksa light olsun
        language: localStorage.getItem('language') || 'tr'
    })

    const data = {
        ...state,
        dispatch
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider
