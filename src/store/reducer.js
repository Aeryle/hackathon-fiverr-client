const initialState = false

export const TECH_CLICKED = 'TECH_CLICKED'


export function homeReducer(state = initialState, action) {
        switch (action.type) {
            case TECH_CLICKED:
                return[...state, ...action.payload]
            default:
                return state
        }
    }
