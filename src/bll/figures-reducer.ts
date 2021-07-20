import { v1 } from "uuid"

export const circleStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: 'blue',
    borderRadius: '50%',
    margin: '30px'
}

export const squareStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: 'green',
    margin: '10px',
}
const figures = [{id: "1", isCanvas: false, style: circleStyle}, {id: "2", isCanvas: false, style: squareStyle}]

const initialState = {
    figures: figures,
    draggableFigureId: "",
    copyStatus: true,
    canvasFigures: [] as Array<FigureType>
}

export const figuresReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "DRAG-STARTED" :
            return {...state, draggableFigureId: action.figureId}
        case "CHANGE-CANVAS-STATUS" :
            return {...state, figures: state.figures.map(item => item.id === state.draggableFigureId ? {...item, isCanvas: true} : item)}
        case "CHANGE-COPY-STATUS" :
            return {...state, copyStatus: action.status}
        case "ADD-FIGURE" :
            let draggableFigure = state.figures.find(i => i.id === state.draggableFigureId) as FigureType
            let newCanvasFigure = {...draggableFigure, id: v1(), isCanvas: true}
            return {...state, canvasFigures: [...state.canvasFigures, newCanvasFigure]}
        default:
            return state
    }
}

//Actions
export const dragStartedAC = (figureId: string) => ({type: "DRAG-STARTED", figureId} as const)
export const changeCanvasStatusAC = () => ({type: "CHANGE-CANVAS-STATUS"} as const)
export const changeCopyStatusAC = (status: boolean) => ({type: "CHANGE-COPY-STATUS", status} as const)
export const addFigureAC = () => ({type: "ADD-FIGURE"} as const)


//Types
type InitialStateType = {
    figures: Array<FigureType>
    draggableFigureId: string
    copyStatus: boolean
    canvasFigures: Array<FigureType>
}
type ActionType = ReturnType<typeof dragStartedAC>
                | ReturnType<typeof changeCanvasStatusAC>
                | ReturnType<typeof changeCopyStatusAC>
                | ReturnType<typeof addFigureAC>

export type FigureType = {
    id: string
    isCanvas: boolean
    style: {}
}
