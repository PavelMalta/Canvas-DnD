import React from "react";
import {FigureType} from "../../../../bll/figures-reducer";

type FigurePropsType = {
    figureData: FigureType
}

export const Figure: React.FC<FigurePropsType> = ({figureData}) => {
    return (
        <div draggable style={{display: "flex", flexDirection: "column"}}>
            <div draggable style={figureData.style}>
            </div>
        </div>
    )
}