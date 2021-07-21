import {combineReducers, createStore} from "redux";
import {figuresReducer} from "./figures-reducer";

const rootReducer = combineReducers({
    figures: figuresReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;