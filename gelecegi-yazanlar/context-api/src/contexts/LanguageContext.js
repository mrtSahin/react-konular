import { createContext, useContext, useState } from "react";

const LanguageContext = createContext()



export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr')

    const values = {
        language,
        setLanguage
    }

    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used LanguageProvider')
    }

    return context

}