import {TEMP_REQUEST, TEMP_SUCCESS, TEMP_FAIL, urlEvent} from '../../const/const'

export default function getTEMP() {
    return dispatch => {
        dispatch({
            type: TEMP_REQUEST,
        });

        fetch(urlEvent, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                eventName: 'temperature'
            }),
        })
            .then(response => response.json())
            .then((data) =>
                dispatch({
                    type: TEMP_SUCCESS,
                    payload: data,
                })
            )

            .catch((error) => dispatch({
                type: TEMP_FAIL,
                error: true,
                payload: new Error(error),
            }))
    }
}