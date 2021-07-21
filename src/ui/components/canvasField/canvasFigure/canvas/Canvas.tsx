import React, {DragEvent, useEffect, useRef} from "react";
import s from "../../CanvasField.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../bll/store";
import {FigureType} from "../../../../../bll/figures-reducer";

const width = 600;
const height = 600;

export const Canvas = () => {
    const figureWidth = 100;
    const figureHeight = 100;

    //HOOK
    const canvasRef = useRef<any>(null)
   // const canvasFigures = useSelector<AppRootStateType, Array<FigureType>>(state => state.figures.canvasFigures)
    const canvasFigures = [{x: 20, y: 10, type: "circle", id: "21"},
                            {x: 100, y: 100, type: "square", id: "211"},
                            {x: 200, y: 100, type: "circle", id: "231"}]

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        canvasFigures.forEach(figure => {
            drawFigure(figure, ctx)
        })
    })

    const drawFigure = (figure: any, context: any) => {
        context.lineWidth = 1;
       /* if (figure === selected) {
            context.lineWidth = 4
        }*/
        context.strokeStyle = '#000'
        if (figure.type === "square") {

            context.fillStyle = 'green'
            context.fillRect(figure.x, figure.y, figureWidth, figureHeight)
            context.strokeRect(figure.x, figure.y, figureWidth, figureHeight)
            context.stroke()
        }
        if (figure.type === "circle") {
                context.fillStyle = 'blue'
                context.ellipse(
                    figure.x + figureWidth / 2,
                    figure.y + figureHeight / 2,
                    figureWidth / 2,
                    figureHeight / 2,
                    0,
                    0,
                    2 * Math.PI
                )
                context.fill()
                context.stroke();
                context.beginPath();
        }

    }



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
                    width={width}
                    height={height}
            />
        </div>
    )
}