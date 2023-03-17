import React from 'react'
import ChangeLanguage from './components/ChangeLanguage'
import ChangeTheme from './components/ChangeTheme'
import Footer from './components/Footer'
import { useTheme } from './contexts/ThemeContext'

function Container() {
    const { theme } = useTheme()
    return (
        <div className={`container ${theme}`}>
            <ChangeLanguage />
            <ChangeTheme />
            <Footer />
        </div>
    )
}

export default Container