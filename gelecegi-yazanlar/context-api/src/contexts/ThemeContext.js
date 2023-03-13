import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const defaultTheme=localStorage.getItem('theme') ||'light'

    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => { // Footer ve ChangeTheme componentlerinde aynı kodu çok kere yazmamak için burada bu fonksiyonu tanımladık vecontext ile ikisine de gönderdik.
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const values = {
        theme,
        toggleTheme
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}                                 // artık veriyi App componentinden dağil de buradan sağlıyoruz.

export default ThemeContext