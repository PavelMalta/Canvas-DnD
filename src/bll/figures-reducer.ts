
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

const initialState = {
figure: [{id: 1, isCanvas: false, style: circleStyle}, {id: 1, isCanvas: false, style: squareStyle}]
}

export const figuresReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action) {
        case "" :
            return state
        default:
            return state
    }
}


//Types
type InitialStateType = {
    figure: Array<FigureType>
}
type ActionType = {

}

export type FigureType = {
    id: number
    isCanvas: boolean
    style: {}
}
