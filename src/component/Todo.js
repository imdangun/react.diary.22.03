import React, {useState} from 'react'
import {ListItem, ListItemText, InputBase, Checkbox,
        ListItemSecondaryAction, IconButton} from '@material-ui/core'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

function Todo({item, delTodo, fixTodo}) {  
    const onClick = () => delTodo(item.todoId)
    const onChange = () =>fixTodo(item.todoId) 
    
    return (
       <ListItem>
           <Checkbox checked={item.done} onChange={onChange}/>
           <ListItemText>
               <InputBase
                    type='text'
                    id={item.todoId+''}
                    name={item.todoId+''}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}/>
           </ListItemText>
           <ListItemSecondaryAction>
               <IconButton onClick={onClick}>
                   <DeleteOutlined/>
               </IconButton>
           </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo