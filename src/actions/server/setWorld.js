import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../../const/const'
import setWorldApi from '../../webAPI/setWorldApi'
export default function setWorld(name, events, map) {
    console.log(name)
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });

        setWorldApi(name, events, map).then(() =>
            dispatch({
                type: LOGIN_SUCCESS,
                massage: " Мир " + name + " сохранен"
            })
        )
            .catch((error) => dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error(error),
            })
            )
    }
}