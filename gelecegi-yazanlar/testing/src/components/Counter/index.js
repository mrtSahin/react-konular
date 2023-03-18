import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const btnDecClick =()=>{
        setCount(count - 1)
    }
    const btnIncClick =()=>{
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={btnDecClick}>Decrease</button>
            <button onClick={btnIncClick}>Increase</button>
        </div>
    )
}

export default Counter