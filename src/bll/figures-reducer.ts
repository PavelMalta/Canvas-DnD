import { v1 } from "uuid"

export const circleStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    borderRadius: "50%",
    margin: "30px",
    border: "1px solid black"
}

export const squareStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    margin: "30px",
    border: "1px solid black"
}
const figures = [{id: "1", isCanvas: false, style: circleStyle}, {id: "2", isCanvas: false, style: squareStyle}]

const initialState = {
    figures: figures,
    draggableFigureId: "",
    copyStatus: true,
    canvasFigures: [] as Array<CanvasFigureType>,
    chooseFigure: {} as CanvasFigureType
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
            let newCanvasFigure = {x: action.x, y: action.y, type: draggableFigure.id === '1' ? 'circle' : 'square',id: v1()}
            return {...state, canvasFigures: [...state.canvasFigures, newCanvasFigure]}
        case "CHOOSE-FIGURE" :
            return {...state, chooseFigure: action.figure}
        case "DELETE-FIGURE" :
            return {...state, canvasFigures: state.canvasFigures.filter(i => i.id !== state.chooseFigure.id), chooseFigure: {} as CanvasFigureType}
        case "SET-FIGURES" :
            return {...state, canvasFigures: action.figures}
        default:
            return state
    }
}

//Actions
export const dragStartedAC = (figureId: string) => ({type: "DRAG-STARTED", figureId} as const)
export const changeCanvasStatusAC = () => ({type: "CHANGE-CANVAS-STATUS"} as const)
export const changeCopyStatusAC = (status: boolean) => ({type: "CHANGE-COPY-STATUS", status} as const)
export const addFigureAC = (x: number, y: number) => ({type: "ADD-FIGURE", x, y} as const)
export const deleteFigureAC = () => ({type: "DELETE-FIGURE"} as const)
export const chooseFigureAC = (figure: CanvasFigureType) => ({type: "CHOOSE-FIGURE", figure} as const)
export const setFiguresAC = (figures: Array<CanvasFigureType>) => ({type: "SET-FIGURES", figures} as const)


//Types
type InitialStateType = {
    figures: Array<FigureType>
    draggableFigureId: string
    copyStatus: boolean
    canvasFigures: Array<CanvasFigureType>
    chooseFigure: CanvasFigureType
}
type ActionType = ReturnType<typeof dragStartedAC>
                | ReturnType<typeof changeCanvasStatusAC>
                | ReturnType<typeof changeCopyStatusAC>
                | ReturnType<typeof addFigureAC>
                | ReturnType<typeof deleteFigureAC>
                | ReturnType<typeof chooseFigureAC>
                | ReturnType<typeof setFiguresAC>

export type FigureType = {
    id: string
    isCanvas: boolean
    style: {}
}

export type CanvasFigureType = {
    x: number
    y: number
    type: string
    id: string
}
