import {combineReducers, createStore} from "redux";
import {figuresReducer} from "./figures-reducer";
import {loadState, saveState} from "./utils/localStorage-utils";

const rootReducer = combineReducers({
    figures: figuresReducer,
})

export const store = createStore(rootReducer, loadState())

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe( () => {
    saveState({
        figures: store.getState().figures
    })
})

// @ts-ignore
window.store = store;