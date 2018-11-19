import {GO_RABBIT} from '../const/const'

const initialState = {
    rabbit: {
        information: {
            place: {
                name: [2, 0]
            }
        }
    }
}



export default function animalsReducer(state = initialState, action) {
    // const world = worldReducer(action);
    switch (action.type) {
        case GO_RABBIT:
            return {
                ...state, rabbit: {
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