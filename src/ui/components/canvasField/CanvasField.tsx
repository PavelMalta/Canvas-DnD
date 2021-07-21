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
    const chooseFigureId = useSelector<AppRootStateType, string>(state => state.figures.chooseFigureId)
    const dispatch = useDispatch()

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