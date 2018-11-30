import {SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL} from '../../const/const'
import getWorldApi from '../../webAPI/getWorldApi'
export default function getWorld(name) {
    return dispatch => {
        dispatch({
            type: SAVE_REQUEST,
        });
        getWorldApi(name).then(response => response.json())
            .then((data) =>
                dispatch({
                    type: SAVE_SUCCESS,
                    payload: {
                        data,
                        massage: " Мир " + data.user + " загружен",
                    }
                })
            )

            .catch((error) => dispatch({
                type: SAVE_FAIL,
                error: true,
                payload: new Error(error),
            }))
    }
}