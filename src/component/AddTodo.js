import React, {useState} from 'react'
import {TextField, Paper, Button, Grid} from '@material-ui/core'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState('')
    const onChange = e => setTitle(e.target.value)
    const onKeyPress = e => {if(e.key === 'Enter') addTodo(title) }
    const onClick = () => addTodo(title)

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
                        onClick={onClick}>
                    +</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo