import React, {DragEvent} from 'react';
import s from './App.module.css';
import { FiguresField } from './components/figuresField/FiguresField';
import {CanvasField} from "./components/canvasField/CanvasField";

function App() {

    const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

  return (
    <div className={s.app} onDragOver={onDragOverHandler}>
        <div className={s.fieldsContainer}>
            <FiguresField/>
            <CanvasField/>
        </div>
    </div>
  );
}

export default App;
