import React from 'react';
import s from './App.module.css';
import { FiguresField } from './components/figuresField/FiguresField';
import {CanvasField} from "./components/canvasField/CanvasField";

function App() {
  return (
    <div className={s.app}>
        <div className={s.fieldsContainer}>
            <FiguresField/>
            <CanvasField/>
        </div>
    </div>
  );
}

export default App;
