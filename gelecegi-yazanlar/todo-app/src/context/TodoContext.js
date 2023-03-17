import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const [filter, setFilter] = useState("all")

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            completed: false
        }
    ])

    const addTodo = (text) => setTodos(prev => [...prev, {
        id: uuidv4(),
        completed: false,
        text
    }])

    const toggleTodo = (id) => {
        const cloned_todos = [...todos] // referanslı bir değişken olduğundan dolayı datanın direkt kendisi üzerinde değişiklik yapmıyoruz.
        const itemIndex = cloned_todos.findIndex(cloned_todo => cloned_todo.id === id) // üzerine tıklanan togglebox u buluyor.
        //console.log(itemIndex)
        const item = todos[itemIndex]
        //console.log(item)
        item.completed = !item.completed
        setTodos(cloned_todos)
        // todos içerisindeki elemanlardan biri üzerinde direkt değişiklik yapamayacağımızdan dolayı todos u klonladık, klon üzerinde değişiklik yapıp klonu todos a yüklüyoruz
        // artik completed değeri değişmiş itemi diğer itemlerle tekrar todos a yüklüyoruz.
    }

    const deleteTodo = (id) => {
        const cloned_todos = [...todos] // referanslı bir değişken olduğundan dolayı datanın direkt kendisi üzerinde değişiklik yapmıyoruz.
        const itemIndex = cloned_todos.findIndex(cloned_todo => cloned_todo.id === id) // üzerine tıklanan togglebox u buluyor.
        //console.log(itemIndex)
        cloned_todos.splice(itemIndex, 1)
        setTodos(cloned_todos)
    }

    const values = {
        todos,
        setTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo
    }

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>

}

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (context == undefined) {
        throw new Error("TodoProvider içerisinde kullanılmalı")
    }
    return context
}