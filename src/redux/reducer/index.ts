import { combineReducers } from "redux";
import { todos } from "./todos";
import { visibilityFilter} from "./filter";

export const rootReducer= combineReducers({
    todos,
    visibilityFilter
})
export type RootState = ReturnType<typeof rootReducer>;