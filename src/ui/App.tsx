import React, {DragEvent} from 'react';
import s from './App.module.css';
import { FiguresField } from './components/figuresField/FiguresField';
import {CanvasField} from "./components/canvasField/CanvasField";
import {useDispatch, useSelector} from "react-redux";
import {CanvasFigureType, deleteFigureAC} from "../bll/figures-reducer";
import {AppRootStateType} from "../bll/store";

function App() {
    //HOOK
    const dispatch = useDispatch()
    const chooseFigure = useSelector<AppRootStateType, CanvasFigureType>(state => state.figures.chooseFigure)
    const isCursorOverCanvas = useSelector<AppRootStateType, boolean>( state => state.figures.isCursorOverCanvas)
    const mouseDown = useSelector<AppRootStateType, boolean>( state => state.figures.mouseDown)

    const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const deleteCanvasFigure = () => {
        dispatch(deleteFigureAC())
    }

    const onMouseOutside = (e: any) => {
        debugger
        if (chooseFigure && !isCursorOverCanvas && mouseDown) {
            dispatch(deleteFigureAC())
        }
    }

  return (
    <div className={s.app} onDragOver={onDragOverHandler} onMouseUp={onMouseOutside}>
        <div className={s.fieldsContainer}>
            <FiguresField/>
            <CanvasField/>
        </div>
        <div className={s.buttonContainer}>
            <button onClick={deleteCanvasFigure}>Delete Figure</button>
        </div>
    </div>
  );
}

export default App;
