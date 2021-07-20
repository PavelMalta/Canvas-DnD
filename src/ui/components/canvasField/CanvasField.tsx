import React, {DragEvent} from "react";
import s from "./CanvasField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {addFigureAC, changeCopyStatusAC, chooseFigureAC, FigureType} from "../../../bll/figures-reducer";
import {CanvasFigure} from "./canvasFigure/CanvasFigure";

export const CanvasField = () => {

    //HOOK
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)
    const chooseFigureId = useSelector<AppRootStateType, string>(state => state.figures.chooseFigureId)
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

    const changeStatusHandler = () => {
        dispatch(changeCopyStatusAC(false))
    }

    return (
        <div className={s.canvasField} onDrop={addFigureHandler} onDragStart={changeStatusHandler}>
            <h1>Canvas</h1>
            <div className={s.canvasContainer}>
                {canvasFigures.map(item => <CanvasFigure
                                                key={item.id}
                                                chooseFigureId={chooseFigureId}
                                                figureData={item}
                                                chooseFigure={chooseFigure}/>)}
                {/*<canvas></canvas>*/}
            </div>
        </div>
    )
}