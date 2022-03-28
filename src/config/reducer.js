import { nanoid } from 'nanoid'

const reducer =  (state,action) =>{
    switch(action.type){
        case 'COMPLETED':
            return state.map(todo=>{
                return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            })
            
        case 'ADD_TODO':
            if (action.todo.length !== 0){
                return [...state, {
                    id: nanoid(),
                    text: action.todo,
                    completed: false
                }]
            }else{
                return[...state]
            }
      
        case 'REMOVE_TODO':
            const results = state.filter(todo=>(todo.id !== action.id))    
            state = results
            return state
        case 'CLEAR_COMPLETED':
            const clear = state.filter(todo=>(todo.completed !== true))    
            state = clear
            return state
            
        default:
    }
}

export default reducer