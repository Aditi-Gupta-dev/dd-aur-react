import {createSlice,nanoid} from '@reduxjs/toolkit'

//store ki initial state banao pehle  =ek obj hota hai 
const initialState={
    todos:[{id:1,text:"hello"}]

}

//creating slice = slice is bigger version or reducer , reducer is functinality

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }  
            state.todos.push(todo);
        },
        // state is variable gives the value of initial state 
        // actions give value to do something
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

//sare reducers ko export kro 
export const {addTodo,removeTodo}=todoSlice.actions;

//store ko bhi awareness chahia reducers ke bare me jiske bare me pata hoga usko hi reduce krega
export default todoSlice.reducer;
