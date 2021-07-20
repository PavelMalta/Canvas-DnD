import React, {DragEvent} from "react";
import s from "./CanvasField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {addFigureAC, chooseFigureAC, FigureType} from "../../../bll/figures-reducer";
import {CanvasFigure} from "./canvasFigure/CanvasFigure";

export const CanvasField = () => {

    //HOOK
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)
    const canvasFigures = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.canvasFigures)
    const dispatch = useDispatch()

    const addFigureHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (!copyStatus) {
            return
        }
        dispatch(addFigureAC())
    }

    const chooseFigure = (figureId: string) => {
        dispatch(chooseFigureAC(figureId))
    }

    return (
        <div className={s.canvasField} onDrop={addFigureHandler}>
            <h1>Canvas</h1>
            <div className={s.canvasContainer} >
                {canvasFigures.map(item => <CanvasFigure key={item.id} figureData={item} chooseFigure={chooseFigure}/>)}
                {/*<canvas></canvas>*/}
            </div>
        </div>
    )
}