import React, {useState, useEffect} from 'react'
import Todo from '../component/Todo'
import AddTodo from '../component/AddTodo'
import apiCall from '../config/api-service'

function DiaryScreen() { 
    const [todos, setTodos] = useState([])   

    const getTodos = () => {
        apiCall('diary/todos', 'get', null)        
            .then(arr => setTodos(arr))          
    }

    const addTodo = title => {
        apiCall('diary/todo/add', 'post', {title})
            .then(getTodos)
    }

    const delTodo = todoId => {      
        apiCall(`diary/todo/del/${todoId}`, 'delete', null)
            .then(getTodos)
    }

    const fixTodo = todoId => {     
        const todoList = todos.filter(todo => todo.todoId === todoId)        
        const todo = todoList[0]
        
        apiCall('diary/todo/fix', 'PATCH', { //PATCH: 대문자로 써야 인식된다. 소문자는 에러이다.
            ...todo,
            done: !todo.done
        }).then(getTodos)      
    }    

    useEffect(getTodos, [])

    return (
        <>
            <AddTodo addTodo={addTodo}/>
            {todos.map((todo, i) => 
                <Todo item={todo} key={todo.todoId} delTodo={delTodo} fixTodo={fixTodo}/>)}
        </>
    )
}

export default DiaryScreen