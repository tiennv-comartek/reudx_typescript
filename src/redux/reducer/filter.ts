import { visiableFilter } from "../../contants";
import { SET_FILTER } from "../actionsTypes";
import { ListActionType } from "../actions";

const initialState:string = visiableFilter.all;
export const visibilityFilter = (state = initialState, action:ListActionType) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload;
        }
        default: {
            return state;
            }
    }
}
