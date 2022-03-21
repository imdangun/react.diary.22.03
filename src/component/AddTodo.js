import React, {useState, useEffect, useContext} from 'react'
import {TextField, Paper, Button, Grid} from '@material-ui/core'
import TodoContext from '../context/TodoContext'

function AddTodo() {
    const [title, setTitle] = useState('')
    const {todos, setTodos} = useContext(TodoContext)

    const onChange = e => setTitle(e.target.value)

    const addTodo = () => {
        const todo = {
            todoId: 100,
            title,
            done: false
        }

        setTodos([todo, ...todos])
    }

    const onKeyPress = e => {
        if(e.key === 'Enter') addTodo()
    }

    return (
        <Paper style={{margin:16, padding: 16}}>
            <Grid container>
                <Grid xs={10} md={10} item style={{paddingRight: 16}}>
                    <TextField 
                        placeholder='할일을 입력하세요.' 
                        fullWidth
                        onChange={onChange}
                        value={title}
                        onKeyPress={onKeyPress}/>
                </Grid>
                <Grid xs={2} md={2} item>
                    <Button 
                        fullWidth 
                        color='secondary' 
                        variant='outlined'
                        onClick={addTodo}>
                    +</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo