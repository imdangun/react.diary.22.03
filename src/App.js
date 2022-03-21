import React from 'react'
import {TodoContextProvider} from './context/TodoContext'
import DiaryScreen from './screen/DiaryScreen'

function App() {
    return (
        <TodoContextProvider>
            <DiaryScreen/>
        </TodoContextProvider>
    )
}

export default App