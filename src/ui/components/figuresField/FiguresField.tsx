import React from "react";
import s from "./FiguresField.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {FigureType} from "../../../bll/figures-reducer";
import {Figure} from "./figure/Figure";

export const FiguresField = () => {
    //HOOK
    const figures = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.figure)


    return (
        <div className={s.figuresField}>
            <h1>Figures</h1>
            {figures.map(item => <Figure key={item.id} figureData={item}/>)}
        </div>
    )
}