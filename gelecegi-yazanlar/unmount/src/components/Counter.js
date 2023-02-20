import { useEffect, useState } from "react"


export default function Counter() {

    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)

    const amountHandler = (e) => {
        setAmount(Number(e.target.innerText))
    }

    useEffect(()=>{
      const interval=setInterval(()=>{setCount(prev => (prev + 1))},1000)
      return()=>{
        clearInterval(interval)
      }
    },[])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(prev => (prev + amount)) }}>Arttır</button>
            <hr />
            Amount +{amount}
            <button onClick={(e) => { amountHandler(e) }}>1</button>
            <button onClick={(e) => { amountHandler(e) }}>3</button>
            <button onClick={(e) => { amountHandler(e) }}>10</button>
        </div>
    )
}