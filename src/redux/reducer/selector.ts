
import { visiableFilter } from "../../contants";
import { Iitems } from "./todos";
export const getTodosbyFilter = (store:any,filter:string) => {
    switch (filter) {
        case visiableFilter.complete:
            console.log();
            return store.todos.filter((todo: Iitems) => todo.completed);
        
        case visiableFilter.inComplete:
            
            return store.todos.filter((todo: Iitems) => !todo.completed);
        
        default:
            return store.todos;
           
    }

}