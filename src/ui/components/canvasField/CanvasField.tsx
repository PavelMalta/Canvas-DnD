import React from "react";
import s from "./CanvasField.module.css"
import {useDispatch} from "react-redux";
import {changeCopyStatusAC} from "../../../bll/figures-reducer";
import {Canvas} from "./canvasFigure/canvas/Canvas";

export const CanvasField = () => {

    //HOOK
    const dispatch = useDispatch()

    const changeStatusHandler = () => {
        dispatch(changeCopyStatusAC(false))
    }

    return (
        <div className={s.canvasField} onDragStart={changeStatusHandler}>
            <h1>Canvas</h1>
            <Canvas/>
        </div>
    )
}