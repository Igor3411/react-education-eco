import {SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, getUrl} from '../../const/const'

export default function getWorld(name) {
    return dispatch => {
        dispatch({
            type: SAVE_REQUEST,
        });

        fetch(getUrl + name + "", {
            method: 'get'
        })
            .then(response => response.json())
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