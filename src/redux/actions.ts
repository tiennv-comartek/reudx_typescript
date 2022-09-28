import { ADD_TODO, TOGGET_TODO, SET_FILTER, DELETE_TODO, EDIT_TODO, COMPLETE_EDIT } from "./actionsTypes";



export  const addTodo = ( content: string) => ({
    type:  ADD_TODO,
    payload: content
})
export const toggleTodo = (id:number) => ({
    type: TOGGET_TODO,
    payload:id
});
export const setFilter = ( filter: string) => ({
    type:  SET_FILTER,
    payload:filter
});
export const deleteTodo = (id:number) => ({
    type: DELETE_TODO,
    payload:id
});
export const editTodo = (id:number) => ({
    type: EDIT_TODO,
    payload:id
});
export const completeEditTodo = (content:string) => ({
    type: COMPLETE_EDIT,
    payload:content
});
export type ListActionType = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof setFilter>| ReturnType<typeof deleteTodo>| ReturnType<typeof completeEditTodo>;



