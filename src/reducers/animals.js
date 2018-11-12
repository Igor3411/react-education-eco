import {FIND_RABBIT} from '../const/const'
import worldReducer from "./world";

const initialState = {
    rabbit: {
        information: {
            place: {
                name: "11",
                eat: false,
                snow: false,
            },
            places: false,
            // {
            //     top: {
            //         block: false,
            //         eat: false,
            //         snow: false,
            //     },
            //     right: {
            //         block: false,
            //         eat: false,
            //         snow: false,
            //     },
            //     bottom: {
            //         block: false,
            //         eat: false,
            //         snow: false,
            //     },
            //     left: {
            //         block: true,
            //         eat: false,
            //         snow: false,
            //     }
            // }
        }
    }
}



export default function animalsReducer(state = initialState, action) {
    // const world = worldReducer(action);
    switch (action.type) {

        // case FIND_RABBIT:
        //     return {
        //         ...state, rabbit: {
        //             information: {
        //                 ...state.information, places: {
        //                     top: world.world.map[action.top],
        //                     right: world.world.map[action.right],
        //                     bottom: world.world.map[action.bottom],
        //                     left: world.world.map[action.left],
        //                 }
        //             }
        //         }
        //     }

        default:
            return state
    }
}
