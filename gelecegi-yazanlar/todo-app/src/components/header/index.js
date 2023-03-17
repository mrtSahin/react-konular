import React from 'react'
import NewTodoForm from './NewTodoForm/index'

function Header() {
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <NewTodoForm/>
            </header>
        </div>
    )
}

export default Header