
import { ADD_TODO,COMPLETE_EDIT,DELETE_TODO,EDIT_TODO,TOGGET_TODO } from "../actionsTypes";
import { ListActionType } from "../actions";


export interface Iitems{
    id: number,
    content: string,
    completed: boolean,
    edit:boolean,
}

export interface TodosI{
    todos: Iitems[];
    id: number,
    id_edit:number,
    
   
}
const initialState:TodosI = {
    todos: [],
    id: 0,
    id_edit:0
  
}

 export const todos = (state = initialState, action: ListActionType) => {
    switch (action.type) {
        case ADD_TODO:
            {
                const  content  = action.payload;
                let nextid = state.id;
                 
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        { id: nextid, content, completed: false, edit:false }
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
        case DELETE_TODO:
            {
                const id  = action.payload;
                const todos = state.todos.filter((t) => t.id !== id);
                return { ...state,todos };
            }
         case EDIT_TODO:
            {
                const id = action.payload;
               
                const todos = state.todos.map(obj => 
                   obj.id === id ? { ...obj, edit: !obj.edit } : obj
                )
                return { ...state,todos,id_edit:id };
                
            }
             case COMPLETE_EDIT:
            {
                const content = action.payload;
                console.log(content, state.id_edit);
                const todos = state.todos.map(obj => 
                   obj.id === state.id_edit ? { ...obj,content:content,edit:!obj.edit} : obj
                )
                return { ...state,todos,id_edit:0 };
                
            }
       
           

        default:
            return state;
        
    }
}
