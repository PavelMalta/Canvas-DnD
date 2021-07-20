import React, {MouseEvent, DragEvent} from "react";
import {FigureType} from "../../../../bll/figures-reducer";

type CanvasFigurePropsType = {
    chooseFigureId: string
    figureData: FigureType
    chooseFigure: (figureId: string) => void
}

export const CanvasFigure: React.FC<CanvasFigurePropsType> = ({chooseFigureId, figureData, chooseFigure}) => {

    const chooseFigureHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.button === 0) {
            chooseFigure(figureData.id)
        }
    }

    const styleFigure =  chooseFigureId === figureData.id ? {...figureData.style, border: "3px solid black"} : figureData.style

    return (
        <div draggable>
            <div style={styleFigure} onClick={chooseFigureHandler}>
            </div>
        </div>
    )
}