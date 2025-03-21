import {createSlice , nanoid} from '@reduxjs/toolkit';

const intialState = {
    todolist:[{
        id:1,
        text: "Learn Redux",
    }]
}


export const todoSlice = createSlice({

    name: 'todo',
    initialState: intialState,
    reducers:{
        addTodo:(state , action) => {
            const Todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todolist.push(Todo)
        },
        removeTodo: ( state , action) =>{
            state.todolist = state.todolist.filter(todo => todo.id !== action.payload)

        },
        updateTodo:(state , action) => {

            const index = state.todolist.findIndex(todo => todo.id === action.payload.id)
            state.todolist[index].text = action.payload.text

        }
    }

})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer