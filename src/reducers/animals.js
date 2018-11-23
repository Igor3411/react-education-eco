import {GO_RABBIT} from '../const/const'

const initialState = {
    rabbit_1: {
        information: {
            place: {
                name: [3, 9]
            }
        }
    },
    rabbit_2: {
        information: {
            place: {
                name: [3, 0]
            }
        }
    },
    rabbit_3: {
        information: {
            place: {
                name: [4, 0]
            }
        }
    },
    rabbit_4: {
        information: {
            place: {
                name: [7, 9]
            }
        }
    }
}



export default function animalsReducer(state = initialState, action) {
    // const world = worldReducer(action);
    switch (action.type) {
        case GO_RABBIT:
            return {
                ...state, [action.name]: {
                    information: {
                        ...state.information, place: {
                            name: action.goto
                        }
                    }
                }
            }

        default:
            {
                return state
            }
    }
}