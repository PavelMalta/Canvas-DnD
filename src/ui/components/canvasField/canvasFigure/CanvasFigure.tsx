import React, {MouseEvent, DragEvent} from "react";
import {FigureType} from "../../../../bll/figures-reducer";

type CanvasFigurePropsType = {
    figureData: FigureType
    chooseFigure: (figureId: string) => void
}

export const CanvasFigure: React.FC<CanvasFigurePropsType> = ({figureData, chooseFigure}) => {

    const chooseFigureHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.button === 0) {
            chooseFigure(figureData.id)
        }
    }

    return (
        <div draggable>
            <div style={figureData.style} onClick={chooseFigureHandler}>
            </div>
        </div>
    )
}