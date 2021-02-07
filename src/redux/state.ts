import { combineReducers, createStore } from "redux";
import { counterReducer } from "../Components/Counter/counterReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export type rootStateT = ReturnType<typeof rootReducer>;

let preloadState;
const persistedTodosString = localStorage.getItem('Counter state')
if (persistedTodosString) preloadState = JSON.parse(persistedTodosString)

export const store = createStore(rootReducer, preloadState);

store.subscribe(() => {
  localStorage.setItem("Counter state", JSON.stringify(store.getState()))
})