import {NEW_SUCCESS} from '../../const/const'

export default function newWorld(name) {
    return dispatch => {

        dispatch({
            type: NEW_SUCCESS,
            payload: name,
            massage: " Мир " + name + " создан",
        })

    }
}