import React from 'react'
import { useTodo } from '../../context/TodoContext'

function ContentFooter() {

    const { todos, setTodos, filter, setFilter } = useTodo()

    const clearCompleted = () => {
        // const cloned_todos=[...todos]
        // const completedTodos = cloned_todos.filter((todo) => !todo.completed ) // tamamlanmamış todo ları buluyor
        // //console.log(completedTodos)
        // setTodos(completedTodos)

        setTodos(prev => prev.filter((todo) => !todo.completed)) // yukarıda yapılan işlemin kısa hali
    }

    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length} </strong>
                    item{todos.length > 1 && "s"} left
                </span>

                <ul className="filters">
                    <li onClick={() => { setFilter("all") }}>
                        <a href="#/" className={filter === "all" ? "selected" : ''}>All</a>
                    </li>
                    <li onClick={() => { setFilter("active") }}>
                        <a href="#/" className={filter === "active" ? "selected" : ''}>Active</a>
                    </li>
                    <li onClick={() => { setFilter("completed") }}>
                        <a href="#/" className={filter === "completed" ? "selected" : ''}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default ContentFooter