import React from "react";
import {FigureType} from "../../../../bll/figures-reducer";

type CanvasFigurePropsType = {
    figureData: FigureType
}

export const CanvasFigure: React.FC<CanvasFigurePropsType> = ({figureData}) => {


    return (
        <div draggable>
            <div style={figureData.style}>
            </div>
        </div>
    )
}