import React from 'react'
import { useTodo } from '../../../context/TodoContext'

function ListItem({ todo }) {

    const { toggleTodo, deleteTodo } = useTodo()

    return (
        <div>
            <li key={todo.id} className={todo.completed == true ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                </div>
            </li>
        </div>
    )
}

export default ListItem