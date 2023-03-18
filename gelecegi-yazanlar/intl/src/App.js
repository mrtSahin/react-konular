import './App.css';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { useEffect, useState } from 'react';

const messages = {
  'tr-TR':{
    title: "Merhaba Ölüm",
    description: '{count} yeni mesajiniz var' // FormattedMassage da geçilen değeri bu şekilde süslü parantezler içerisinde kullanabiliriz. backtick `` kullanmamıza gerek yok
  },
  'en-EN':{
    title: "Hello Death",
    description: 'You have {count} new massages'
  }
}

function App() {
  const defaultLocale = localStorage.getItem('lang') ? localStorage.getItem('lang') :  navigator.language // localstorage da yoksa varsayilan dili alir.
  const [locale,setLocale]=useState(defaultLocale)
  console.log(defaultLocale)

  useEffect(()=>{
    localStorage.setItem('lang',locale)
  },[locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}> {/** bu componentin her şeyi sarmalaması gerekli. Burada hangi mesaj objesini alacağımızı(seçili dili) belirliyoruz */}

        <FormattedMessage
          id="title" // dil belirlendikten sonra FormattedMessage componenti ile gösterilecek metinler ayrı ayrı componentlerde gösterilebilir. seçilecek metin id ile belirtilir.
        /> 
        <p>
          <FormattedMessage id='description' values={{count:5}}/> {/** FormattedMessages ile değişkenler message içerisine değişkenler yollayabiliriz. */}
        </p>
        <br/>
        <button onClick={()=>setLocale('tr-TR')}>TR</button>
        <button onClick={()=>setLocale('en-EN')}>EN</button>
      </IntlProvider>

    </div>
  );
}

export default App;
