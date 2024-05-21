import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todo:[{id:1,text:"Hello guys"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const newTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.todo.push(newTodo)
        },
        removeTodo:(state,action) => {
            state.todo = state.todo.filter((todo) =>todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id,newTodo} = action.payload
            const existingTodo = state.todo.find((todo) => todo.id !== action.payload)
            if(existingTodo){
                existingTodo.todo = newTodo
            }
        }
    } 
    
})

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer
