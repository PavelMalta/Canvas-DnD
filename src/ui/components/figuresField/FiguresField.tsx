import React, {DragEvent} from "react";
import s from "./FiguresField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {changeCanvasStatusAC, changeCopyStatusAC, dragStartedAC, FigureType} from "../../../bll/figures-reducer";
import {Figure} from "./figure/Figure";

export const FiguresField = () => {
    //HOOK
    const figures = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.figures)
    const dispatch = useDispatch()

    const startDragging = (figureId: string) => {
        dispatch(dragStartedAC(figureId))
    }

    const changeCopyStatus = () => {
        dispatch(changeCopyStatusAC(true))
    }

    const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const endDraggingFigure = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(changeCanvasStatusAC())
    }

    return (
        <div className={s.figuresField} onDragStart={changeCopyStatus} onDragOver={onDragOverHandler} onDrop={endDraggingFigure} >
            <h1>Figures</h1>
            {figures.map(item => <Figure key={item.id} figureData={item} startDragging={startDragging}/>)}
        </div>
    )
}