import React, {useContext} from 'react'
import Todo from '../component/Todo'
import AddTodo from '../component/AddTodo'
import TodoContext from '../context/TodoContext'

function DiaryScreen() {
    const {todos} = useContext(TodoContext)

    return (
        <>
            <AddTodo/>
            {todos.map((todo, i) => <Todo item={todo} key={i}/>)}
        </>
    )
}

export default DiaryScreen