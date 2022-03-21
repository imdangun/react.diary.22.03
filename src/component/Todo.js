import React from 'react'
import {ListItem, ListItemText, InputBase, Checkbox} from '@material-ui/core'

function Todo({item}) {
    return (
       <ListItem>
           <Checkbox checked={item.done}/>
           <ListItemText>
               <InputBase
                    type='text'
                    id={item.todoId}
                    name={item.todoId}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}/>
           </ListItemText>
        </ListItem>
    )
}

export default Todo