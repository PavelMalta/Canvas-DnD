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
const figures = [{id: 1, isCanvas: false, style: circleStyle}, {id: 2, isCanvas: false, style: squareStyle}]

const initialState = {
    figures: figures,
    draggableFigureId: null
}

export const figuresReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "DRAG-STARTED" :
            return {...state, draggableFigureId: action.figureId}
        default:
            return state
    }
}

//Actions
export const dragStartedAC = (figureId: number) => ({type: "DRAG-STARTED", figureId} as const)


//Types
type InitialStateType = {
    figures: Array<FigureType>,
    draggableFigureId: null | number
}
type ActionType = ReturnType<typeof dragStartedAC>

export type FigureType = {
    id: number
    isCanvas: boolean
    style: {}
}
