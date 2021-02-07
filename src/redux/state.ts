import { combineReducers, createStore } from "redux";
import {counterReducer} from "../Components/Counter/counterReducer";

const rootReducer = combineReducers({
    counterReducer
});

export type rootStateT = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)