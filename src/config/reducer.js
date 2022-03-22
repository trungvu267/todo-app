import { nanoid } from 'nanoid'

const reducer =  (state,action) =>{
    switch(action.type){
        case 'COMPLETED':
            return state.map(todo=>{
                return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            })
            
        case 'ADD_TODO':
            return [...state, {
                id: nanoid(),
                text: action.todo,
                completed: false
            }]
      
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