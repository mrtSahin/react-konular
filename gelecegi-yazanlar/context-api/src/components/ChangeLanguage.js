import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function ChangeLanguage() {
  const lang = useLanguage()
  return (
    <div>Aktif Dil {lang.language} <br />
      <button onClick={() => { lang.setLanguage(prev => (prev == 'tr' ? 'en' : 'tr')) }}>Dili DEgis</button>
      <hr />
    </div>
  )
}

export default ChangeLanguage