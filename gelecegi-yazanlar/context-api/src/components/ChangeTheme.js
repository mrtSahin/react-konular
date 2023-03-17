import React from 'react'
import {useTheme} from '../contexts/ThemeContext'
// value değerine erişebilmek için useContext ve value değerini yollayan contexi import etmeliyiz

function ChangeTheme() {
    const { theme, toggleTheme } = useTheme() // value değerinin alınması
    console.log(theme)
    return (
        <div >
            ChangeTheme
            <p>Aktif Tema: {theme}</p>
            <button onClick={toggleTheme}>Change Theme</button>

        </div>
    )
}

export default ChangeTheme