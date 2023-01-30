import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const Context = createContext()

export const useAuth = () => useContext(Context)// bu oluşturduğumuz Contex in Provider ında value olarak yolladıklarımız Context.Provider ın child larına aktaılır. aktarılan veriyi childlarda kullanmak için useAuth metodu çağırılarak veriler alınmalı
// Header a bakıldığında const { user, dispatch } = useAuth() ile datanın alınışını görebiliriz.

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
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
