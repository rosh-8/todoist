import React from 'react'
import { useDispatch } from "react-redux";
import { toggleTodoItem, clearToDoItem } from "../features/todoSlice";
import {
    ListItem,
    Checkbox,
    ListItemText,
    IconButton
} from '@mui/material';
import useAudio from "../features/useAudio";
import DeleteIcon from '@mui/icons-material/Delete';


// import RefreshRoundedIcon from '@mui/material/Icon';

const TodoItem = ({ item, isDone, id, clearUrl }) => {
    const [playing, toggle] = useAudio(clearUrl);

    const dispatch = useDispatch();
    function toggleCheckbox() {
        toggle();
        console.log("selected e");
        dispatch(toggleTodoItem({
            item,
            isDone,
            id
        }))
    }
    function clearToDo() {
        toggle();
        dispatch(clearToDoItem({
            id,
        }))
    }

    return (
        <ListItem className={isDone && 'item_done'}>
            <Checkbox onClick={toggleCheckbox} checked={isDone} />
            <ListItemText primary={item} />
            <IconButton aria-label="delete" onClick={clearToDo} style={{ color: "#b51a0e" }}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}

export default TodoItem
