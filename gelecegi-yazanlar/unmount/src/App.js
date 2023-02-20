import './App.css';
import { useEffect, useState } from 'react'
import Counter from './components/Counter';

function App() {

  const [durum,setDurum]=useState(true)

  return (

    <div className="App">

      {durum&&<Counter/>}
      <button onClick={()=>{setDurum(durum?false:true)}}>Gizle/Göster</button>
    </div>

    
  );
}

export default App;
