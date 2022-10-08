type increment = ReturnType<typeof incrementAC>
type reset = ReturnType<typeof resetAC>
type setStartValue = ReturnType<typeof setStartValueAC>
type setMaxValue = ReturnType<typeof setMaxValueAC>
type toggleError = ReturnType<typeof toggleErrorAC>

const initialState = {
    count: 0,
    maxValue: 0,
    error: false
}

type initialStateType = {
    count: number,
    maxValue: number,
    error: boolean
}

type otherTypes = increment | reset | setStartValue | setMaxValue | toggleError

export const counterReducer = (state: initialStateType = initialState, action: otherTypes) => {
    switch (action.type) {
        case 'INCREMENT_VALUE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'RESET_VALUE':
            return {
                ...state,
                count: 0,
                error: false
            }
        case 'SET_START_VALUE':
            return {
                ...state,
                count: action.start
            }
        case 'SET_MAX_VALUE':
            return {
                ...state,
                maxValue: action.max
            }
        case 'TOGGLE_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}


export const incrementAC = (value: number) => {
    return {
        type: 'INCREMENT_VALUE',
        count: value
    } as const
}

export const resetAC = (value: number) => {
    return {
        type: 'RESET_VALUE',
        value: value
    } as const
}

export const setStartValueAC = (value: number) => {
    return {
        type: 'SET_START_VALUE',
        start: value
    } as const
}

export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET_MAX_VALUE',
        max: value
    } as const
}

export const toggleErrorAC = (error: boolean) => {
    return {
        type: 'TOGGLE_ERROR',
        error: error
    } as const
}