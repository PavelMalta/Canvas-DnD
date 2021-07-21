import React, {DragEvent, useEffect, useRef, useState} from "react";
import s from "../../CanvasField.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../bll/store";
import {addFigureAC, CanvasFigureType} from "../../../../../bll/figures-reducer";

const width = 730;
const height = 650;

export const Canvas = () => {
    const figureWidth = 100;
    const figureHeight = 100;

    //HOOK
    const canvasRef = useRef<any>(null)
    const [mouse, setMouse] = useState({})
    const dispatch = useDispatch()
    const canvasFigures = useSelector<AppRootStateType, Array<CanvasFigureType>>(state => state.figures.canvasFigures)
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)

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
        setMouse(prevMouse => ({
            ...prevMouse,
            down: false
        }))
    }
    const onMouseMove = () => {
        setMouse(prevMouse => ({
            ...prevMouse,
            out: false
        }))
    }
    const onMouseOut = () => {

    }
    const onMouseEnter = () => {

    }
    const onDrop = (e: DragEvent<HTMLCanvasElement>) => {
        e.preventDefault()
        e.stopPropagation()
        const x = e.pageX - canvasRef.current.offsetLeft - figureWidth / 2
        const y = e.pageY - canvasRef.current.offsetTop - figureHeight / 2
        if (!copyStatus) {
            return
        }
        dispatch(addFigureAC(x, y))
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