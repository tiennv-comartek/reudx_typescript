
import { ADD_TODO,TOGGET_TODO } from "../actionsTypes";
import { ListActionType } from "../actions";

export interface Iitems{
    id: number,
    content: string,
    completed:boolean,
}

export interface TodosI{
    todos: Iitems[];
    id:number
}
const initialState:TodosI = {
    todos: [],
    id :0
}

 export const todos = (state = initialState, action: ListActionType) => {
    switch (action.type) {
        case ADD_TODO:
            {
                const  content  = action.payload;
                let nextid = state.id;
                console.log(state.todos);
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        { id: nextid, content, completed: false }
                    ],
                    id: ++nextid,
                     
                }
            }
          
        case TOGGET_TODO:
            {
                const id  = action.payload;
                const todos = state.todos.map(obj => 
                   obj.id === id ? { ...obj, completed: !obj.completed } : obj
                )
                return { ...state,todos };
            }
        default:
            return state;
        
    }
}
