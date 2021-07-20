import React from "react";
import s from "./FiguresField.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {dragStartedAC, FigureType} from "../../../bll/figures-reducer";
import {Figure} from "./figure/Figure";

export const FiguresField = () => {
    //HOOK
    const figures = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.figures)
    const dispatch = useDispatch()

    const startDragging = (figureId: number) => {
        dispatch(dragStartedAC(figureId))
    }

    return (
        <div className={s.figuresField}>
            <h1>Figures</h1>
            {figures.map(item => <Figure key={item.id} figureData={item} startDragging={startDragging}/>)}
        </div>
    )
}