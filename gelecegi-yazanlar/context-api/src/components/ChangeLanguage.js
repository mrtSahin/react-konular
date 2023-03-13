import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function ChangeLanguage() {
  const lang=useContext(LanguageContext)
    return (
    <div>Aktif Dil {lang.language} <br/>
    <button onClick={()=>{lang.setLanguage(prev=>(prev=='tr'?'en':'tr'))}}>Dili DEgis</button>
    <hr/>
    </div>
    
  )
}

export default ChangeLanguage