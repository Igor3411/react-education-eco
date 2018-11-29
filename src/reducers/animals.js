import {GO_RABBIT} from '../const/const'

const initialState = {
    rabbit_1: {
        information: {
            place:
                [3, 9]
        }
    },
    rabbit_2: {
        information: {
            place: [3, 0]
            
        }
    },
    rabbit_3: {
        information: {
            place: [4, 0]
        }
    },
    rabbit_4: {
        information: {
            place: [7, 9]
        }
    },
    predator_1: {
        information: {
            place: [4, 1]
        }
    }
}

export default function animalsReducer(state = initialState, action) {
    switch (action.type) {
        case GO_RABBIT:
            return {
                ...state, [action.payload.name]: {
                    information: {
                        ...state.information, place: action.payload.goto
                    }
                }
            }

        default:
            {
                return state
            }
    }
}