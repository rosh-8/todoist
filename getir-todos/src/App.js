import React from 'react';
import ToDoInput from './components/todoInput';
import ToDoItem from './components/todoItem';
import Refresh from './components/Refresh';
import { useSelector } from 'react-redux';
import { selectToDoList } from './features/todoSlice';
import { Grid, Container, AppBar, Typography, Toolbar } from '@mui/material';
import url from "./assets/sounds/add.wav";
import clearUrl from "./assets/sounds/popup.wav";
import refreshUrl from "./assets/sounds/refresh.wav";


function App() {
  const todoItems = useSelector(selectToDoList);
  const totalItems = todoItems.length;
  const doneItems = (todoItems.filter((item) => item.isDone)).length;
  const pendingItems = totalItems - doneItems;

  return (
    <div className="App">
      <Container maxWidth="sm"
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="todo__container">
        <AppBar position="static" style={{ height: 64 }}>
          <Grid container>
            <Grid xs={6} md={9} item>
              <Toolbar style={{ height: 64 }}>
                <Typography color="inherit" style={{ fontSize: '1.3rem' }}>Task It Up!</Typography>
              </Toolbar>
            </Grid>
            <Grid xs={6} md={3} item style={{textAlign: "right"}}>
              <Refresh refreshUrl={refreshUrl} totalItems={totalItems} />
            </Grid>
          </Grid>
        </AppBar>
        <div className='list__header'>
          {totalItems ? (pendingItems != 0 ? `You have ${pendingItems} task/s left of total ${totalItems} tasks` : `All Done!`) : `Start by adding a Task`}
        </div>
        <div className='list__wrapper'>
          {todoItems.map((item) => (
            <ToDoItem
              key={item.id}
              item={item.item}
              isDone={item.isDone}
              id={item.id}
              clearUrl={clearUrl}
            />)
          )}
        </div>
        <div className='add_item_wrapper'>        
          <ToDoInput url={url} />
        </div>
      </Container>
    </div>
  );
}

export default App;
