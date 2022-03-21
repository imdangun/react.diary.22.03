import React, {createContext, useState} from 'react'

const TodoContext = createContext()

export function TodoContextProvider({children}) {
    const [todos, setTodos] = useState([
        {
            todoId: 3,
            title: '자바 공부',
            done: true
        },
        {
            todoId: 2,
            title: '연극 관람',
            done: false
        },
        {
            todoId: 1,
            title: '수학 공부',
            done: true
        }        
    ])

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext