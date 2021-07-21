import React, {DragEvent} from 'react';
import s from './App.module.css';
import { FiguresField } from './components/figuresField/FiguresField';
import {CanvasField} from "./components/canvasField/CanvasField";
import {useDispatch} from "react-redux";
import {deleteFigureAC} from "../bll/figures-reducer";

function App() {
    //HOOK
    const dispatch = useDispatch()

    const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const deleteCanvasFigure = () => {
        dispatch(deleteFigureAC())
    }

  return (
    <div className={s.app} onDragOver={onDragOverHandler}>
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
