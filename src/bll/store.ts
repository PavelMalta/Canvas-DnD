import {combineReducers, createStore} from "redux";
import { canvasReducer } from "./canvas-reducer";
import {figuresReducer} from "./figures-reducer";

const rootReducer = combineReducers({
    figures: figuresReducer,
    canvas: canvasReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;