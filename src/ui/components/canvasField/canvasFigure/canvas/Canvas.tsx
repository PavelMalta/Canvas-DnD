import React, {DragEvent, useRef} from "react";
import s from "../../CanvasField.module.css";

export const Canvas = () => {
    //HOOK
    const canvasRef = useRef(null)


    const onDragOver = (e: DragEvent<HTMLCanvasElement>) => {
        e.preventDefault()
    }
    const onMouseDown = () => {

    }
    const onMouseUp = () => {

    }
    const onMouseMove = () => {

    }
    const onMouseOut = () => {

    }
    const onMouseEnter = () => {

    }
    const onDrop = () => {

    }


    return (
        <div className={s.canvasContainer}>
            <canvas ref={canvasRef}
                    onDragOver={onDragOver}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onMouseOut={onMouseOut}
                    onMouseEnter={onMouseEnter}
                    onDrop={onDrop}
            />
        </div>
    )
}