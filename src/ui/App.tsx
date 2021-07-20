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
    <div className={s.app} onDragOver={onDragOverHandler} onDrop={deleteCanvasFigure}>
        <div className={s.fieldsContainer}>
            <FiguresField/>
            <CanvasField/>
        </div>
    </div>
  );
}

export default App;
