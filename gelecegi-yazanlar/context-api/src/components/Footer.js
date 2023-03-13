import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LanguageContext from '../contexts/LanguageContext'

function Footer() {

    const {language,setLanguage}=useContext(LanguageContext)

    const {theme,toggleTheme}=useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <hr/>
            Footer
            <p>Aktif Tema: {theme}</p>
            <button onClick={toggleTheme}>Temayı Değiş</button>
            <button onClick={()=>setLanguage(prev=>(prev=='tr'?'en':'tr'))}>Dili Değiş</button>
        
        </div>
    )
}

export default Footer