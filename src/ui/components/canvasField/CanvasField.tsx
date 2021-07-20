import React, {DragEvent} from "react";
import s from "./CanvasField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {addFigureAC} from "../../../bll/figures-reducer";

export const CanvasField = () => {

    //HOOK
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)
    const dispatch = useDispatch()

    const addFigureHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (!copyStatus) {
            return
        }
        dispatch(addFigureAC())
    }

    return (
        <div className={s.canvasField} onDrop={addFigureHandler}>
            <h1>Canvas</h1>
            <div className={s.canvasContainer} >
                <canvas></canvas>
            </div>
        </div>
    )
}