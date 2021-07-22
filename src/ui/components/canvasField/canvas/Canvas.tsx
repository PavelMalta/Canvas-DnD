import React, {DragEvent, useEffect, useRef} from "react";
import s from "../CanvasField.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../bll/store";
import {
    addFigureAC,
    CanvasFigureType,
    chooseFigureAC,
    deleteFigureAC,
    setFiguresAC, setIsCursorAC, setMouseDownAC
} from "../../../../bll/figures-reducer";

export const Canvas = () => {
    const width = 730;
    const height = 650;
    const figureWidth = 100;
    const figureHeight = 100;

    //HOOK
    const canvasRef = useRef<any>(null)
    const dispatch = useDispatch()
    const canvasFigures = useSelector<AppRootStateType, Array<CanvasFigureType>>(state => state.figures.canvasFigures)
    const chooseFigure = useSelector<AppRootStateType, CanvasFigureType>(state => state.figures.chooseFigure)
    const copyStatus = useSelector<AppRootStateType, boolean>(state => state.figures.copyStatus)
    const mouseDown = useSelector<AppRootStateType, boolean>( state => state.figures.mouseDown)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        canvasFigures.forEach(figure => {
            if(figure.id !== chooseFigure.id) {
                drawFigure(figure, ctx)
            }
        })
    }, [canvasFigures, chooseFigure])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (chooseFigure) {
            drawFigure(chooseFigure, ctx)
        }
        document.onkeydown = (e) => {
            if (e.key === 'Delete' && chooseFigure) {
                dispatch(deleteFigureAC())
            }
        }
    }, [chooseFigure, canvasFigures])



    const drawFigure = (figure: CanvasFigureType, ctx: any) => {
        ctx.lineWidth = 1;
        if (figure.id === chooseFigure.id) {
            ctx.lineWidth = 4
        }
        ctx.strokeStyle = 'black'
        if (figure.type === "square") {

            ctx.fillStyle = 'green'
            ctx.fillRect(figure.x, figure.y, figureWidth, figureHeight)
            ctx.strokeRect(figure.x, figure.y, figureWidth, figureHeight)
            ctx.stroke()
        }
        if (figure.type === "circle") {
            ctx.fillStyle = 'blue'
            ctx.arc(
                figure.x + figureWidth / 2,
                figure.y + figureHeight / 2,
                figureWidth / 2,
                0,
                2 * Math.PI,
                true
            )
            ctx.fill()
            ctx.stroke();
            ctx.beginPath();
        }

    }
    const cursorInFigure = (x: number, y: number, figure: CanvasFigureType) => x > figure.x && x < figure.x + figureWidth && y > figure.y && y < figure.y + figureHeight


    const onDragOver = (e: DragEvent<HTMLCanvasElement>) => {
        e.preventDefault()
    }
    const onMouseDown = (e: any) => {
        e.stopPropagation()
        const x = e.pageX - canvasRef.current.offsetLeft
        const y = e.pageY - canvasRef.current.offsetTop

        let isCursorOnAnyFigure = false
        dispatch(setMouseDownAC(true))
        canvasFigures.forEach(figure => {
            if (cursorInFigure(x, y, figure)) {
                dispatch(chooseFigureAC(figure))
                isCursorOnAnyFigure = true;
            }
        })

        if (!isCursorOnAnyFigure) {
            dispatch(chooseFigureAC({} as CanvasFigureType))
        }

    }
    const onMouseUp = () => {
        dispatch(setMouseDownAC(false))
    }
    const onMouseMove = (e: any) => {
        e.stopPropagation()

        const x = e.pageX - canvasRef.current.offsetLeft
        const y = e.pageY - canvasRef.current.offsetTop

        if (chooseFigure && mouseDown) {
            dispatch(setFiguresAC(canvasFigures.map(figure => {
                if (figure.id === chooseFigure.id) {
                    figure.x = x - figureWidth / 2
                    figure.y = y - figureHeight / 2
                }
                return figure
            })))
        }
    }

    const onDrop = (e: DragEvent<HTMLCanvasElement>) => {
        e.preventDefault()
        e.stopPropagation()
        const x = e.pageX - canvasRef.current.offsetLeft - figureWidth / 2
        const y = e.pageY - canvasRef.current.offsetTop - figureHeight / 2
        if (copyStatus) {
            dispatch(addFigureAC(x, y))
        }
    }

    const onMouseEnter = (e: any) => {
        dispatch(setIsCursorAC(true))
    }

    const onMouseOut = (e: any) => {
        dispatch(setIsCursorAC(false))
    }

    return (
        <div className={s.canvasContainer}>
            <canvas ref={canvasRef}
                    onDragOver={onDragOver}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onDrop={onDrop}
                    onMouseEnter={onMouseEnter}
                    onMouseOut={onMouseOut}
                    width={width}
                    height={height}
            />
        </div>
    )
}