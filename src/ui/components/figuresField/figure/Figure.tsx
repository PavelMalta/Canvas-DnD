import React from "react";
import {FigureType} from "../../../../bll/figures-reducer";

type FigurePropsType = {
    figureData: FigureType
    startDragging: (figureId: string) => void
}

export const Figure: React.FC<FigurePropsType> = ({figureData, startDragging}) => {

    const dragStartHandler = () => {
        startDragging(figureData.id)
    }

    return (
        <div draggable style={{display: "flex", flexDirection: "column"}}>
            <div draggable style={figureData.style} onDragStart={dragStartHandler}>
            </div>
        </div>
    )
}