import React, {DragEvent, useRef} from "react";
import s from "./CanvasField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {
    addFigureAC,
    CanvasFigureType,
    changeCopyStatusAC,
    chooseFigureAC,
    FigureType
} from "../../../bll/figures-reducer";
import {CanvasFigure} from "./canvasFigure/CanvasFigure";
import {Canvas} from "./canvasFigure/canvas/Canvas";

export const CanvasField = () => {

    //HOOK
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)
    const chooseFigureId = useSelector<AppRootStateType, string>(state => state.figures.chooseFigureId)
    const canvasFigures = useSelector<AppRootStateType, Array<CanvasFigureType>>(state => state.figures.canvasFigures)
    const dispatch = useDispatch()

   /* const addFigureHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (!copyStatus) {
            return
        }
        dispatch(addFigureAC(e.clientX-485, e.clientY-181))
    }*/

    const chooseFigure = (figureId: string) => {
        dispatch(chooseFigureAC(figureId))
    }

    const changeStatusHandler = () => {
        dispatch(changeCopyStatusAC(false))
    }

    return (
        <div className={s.canvasField} onDragStart={changeStatusHandler}>
            <h1>Canvas</h1>
           {/* <div className={s.canvasContainer}>
                {canvasFigures.map(item => <CanvasFigure
                                                key={item.id}
                                                chooseFigureId={chooseFigureId}
                                                figureData={item}
                                                chooseFigure={chooseFigure}/>)}
            </div>*/}
            <Canvas/>
        </div>
    )
}