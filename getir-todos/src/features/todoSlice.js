import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveToDo : (state, action) => {state.todoList.unshift(action.payload)},
        toggleTodoItem: (state, action) => {
                state.todoList.map((item) => {
                    if(action.payload.id === item.id) {
                        return item.isDone = !item.isDone
                    }
                })
        },
        refresh: (state, action) => {
            console.log(action, 'check action');
            state.todoList = []
        },
        clearToDoItem: (state, action) => {return{todoList: state.todoList.filter((item, index) => item.id !== action.payload.id)}}
    }
});

export const { saveToDo, toggleTodoItem, refresh, clearToDoItem } = todoSlice.actions
export const selectToDoList = state => state.todos.todoList 
export default todoSlice.reducer