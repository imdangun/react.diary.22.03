import React from 'react'
import Todo from './component/Todo'

function App() {
    const items = [
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
    ]

    return (
        <div className='App'>
            {items.map(item => <Todo item={item}/>)}          
        </div>
    )
}

export default App