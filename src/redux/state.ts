import { combineReducers, createStore } from "redux";
import {counterReducer} from "../Components/Counter/counterReducer";

const rootReducer = combineReducers({
    counterReducer
});

type rootStateT = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)