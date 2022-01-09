import React, { useState } from "react";
import "../assets/styles/todoInput.css";
import { useDispatch } from "react-redux";
import { saveToDo } from "../features/todoSlice";
import { TextField, Paper, Button, Grid } from '@mui/material';
import useAudio from "../features/useAudio";
import { AddComment } from "@material-ui/icons";

const ToDoInput = ({url}) => {
    const [input, setInput] = useState("");
    const [playing, toggle] = useAudio(url);
    const dispatch = useDispatch();

    const addToDoItem = () => {
        !playing && toggle();
        console.log(input, 'check input bal');
        //to do: add redux here
        console.log("Button Clicked for item, Input ->", input);
        dispatch(saveToDo({
            item: input,
            isDone: false,
            id: Date.now()
        }));
        setInput("");
    }
    return(
        <Paper className="input__wrapper">
             <Grid container>
               <Grid xs={12} md={9}>
                 <TextField value={input} className="todo__input" placeholder="Add a Task" xs={12} md={12} onChange={(e) => setInput(e.target.value)}/>
               </Grid>
               <Grid xs={12} md={3} style={{backgroundColor: "#04528e"}}>
                <Button
                   fullWidth
                   color="secondary"
                   variant="outlined"
                   onClick={addToDoItem}
                   disabled={input.length ? '' : 'disabled'}
                   className="add__button"
                   startIcon={<AddComment />}
                >Add</Button>
               </Grid>
             </Grid>
           </Paper>
       
    )
}

export default ToDoInput;