import {
    GO,
    EATING,
    STARVATION
} from '../const/const'

const initialState = {
    rabbit_1: {
        information: {
            place: [3, 9],
            satiety: 5,
        }
    },
    rabbit_2: {
        information: {
            place: [3, 0],
            satiety: 5,

        }
    },
    rabbit_3: {
        information: {
            place: [4, 0],
            satiety: 5,
        }
    },
    rabbit_4: {
        information: {
            place: [7, 9],
            satiety: 5,
        }
    },
    predator_1: {
        information: {
            place: [4, 1],
            satiety: 6,
        }
    }
}

export default function animalsReducer(state = initialState, action) {
    switch (action.type) {
        case GO:
            return {
                ...state, [action.payload.name]: {
                    information: {
                        ...state[action.payload.name].information, place: action.payload.goto
                    }
                }
            }

        case STARVATION:
            return {
                ...state, [action.payload.name]: {
                    information: {
                        ...state[action.payload.name].information, satiety: action.payload.satiety
                    }
                }
            }

        case EATING:
            return {
                ...state, [action.payload.name]: {
                    information: {
                        ...state[action.payload.name].information, satiety: action.payload.satiety
                    }
                }
            }

        default:
            {
                return state
            }
    }
}