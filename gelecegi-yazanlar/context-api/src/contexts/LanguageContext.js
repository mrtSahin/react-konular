import { createContext, useState } from "react";

const LanguageContext = createContext()



export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr')

    const values = {
        language,
        setLanguage
    }
    
    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}


export default LanguageContext