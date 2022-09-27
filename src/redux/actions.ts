import { ADD_TODO, TOGGET_TODO, SET_FILTER } from "./actionsTypes";



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
export type ListActionType = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof setFilter>;



