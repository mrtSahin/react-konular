import React, { useState } from 'react'

const defaultItems = [
    {
        name: "Item A"
    },
    {
        name: "Item B"
    },
    {
        name: "Item C"
    }
]

function Todo() {

    const [text, setText] = useState("")
    const [items, setItems] = useState(defaultItems)

    const addItem = () => {
        setItems(prev => [...prev, { name: text }])
        setText('')
    }

    console.log(text)
    return (
        <div>
            <label>
                Text
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <button onClick={addItem}>Add</button>

            <br />

            {
                items.map((item, key) => {
                    return <div key={key}>{item.name}</div>
                })
            }
        </div>
    )
}

export default Todo