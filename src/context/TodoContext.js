import React, {createContext, useState, useEffect} from 'react'
import host, {toLogin} from '../config/app-config'

const TodoContext = createContext()

export function TodoContextProvider({children}) { 
    const [todos, setTodos] = useState([])   

    const getTodos = () => {
        fetch(host + 'diary/todos')
            .then(response => {
                if(response.status !== 403)                
                    response.json().then(todos => setTodos(todos))
                else return Promise.reject('hello')
            })
            .catch(toLogin)
    }

    const addTodo = title => {
        fetch(host + 'diary/todo/add', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title
            })           
        })
    }

    const delTodo = todoId => {      
        fetch(host + `diary/todo/del/${todoId}`, {
            method: 'delete'
        })
    }

    const fixTodo = todoId => {
        const todoList = todos.filter(todo => todo.todoId === todoId)        
        const todo = todoList[0]       

        fetch(host + 'diary/todo/fix', {
            method: 'PATCH', //대문자로 써야 인식된다. 소문자는 에러이다.
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...todo,
                done: !todo.done
            })
        })    
    }

    useEffect(getTodos)

    return (
        <TodoContext.Provider value={{todos, addTodo, delTodo, fixTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext