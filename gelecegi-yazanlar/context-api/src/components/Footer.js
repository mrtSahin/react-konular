
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

function Footer() {

    const { language, setLanguage } = useLanguage()

    const { theme, toggleTheme } = useTheme()
    console.log(theme)
    return (
        <div>
            <hr />
            Footer
            <p>Aktif Tema: {theme}</p>
            <button onClick={toggleTheme}>Temayı Değiş</button>
            <button onClick={() => setLanguage(prev => (prev == 'tr' ? 'en' : 'tr'))}>Dili Değiş</button>
        </div>
    )
}

export default Footer