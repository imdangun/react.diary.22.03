import React, {useContext} from 'react'
import Todo from '../component/Todo'
import AddTodo from '../component/AddTodo'
import TodoContext from '../context/TodoContext'

function DiaryScreen() { 
    const {todos, addTodo, delTodo, fixTodo} = useContext(TodoContext)

    return (
        <>
            <AddTodo addTodo={addTodo}/>
            {todos.map((todo, i) => 
                <Todo item={todo} key={todo.todoId} delTodo={delTodo} fixTodo={fixTodo}/>)}
        </>
    )
}

export default DiaryScreen