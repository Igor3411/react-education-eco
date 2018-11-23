import {TIME_REQUEST, TIME_SUCCESS, TIME_FAIL, urlEvent} from '../../const/const'

export default function getTIME() {
    return dispatch => {
        dispatch({
            type: TIME_REQUEST,
        });

        fetch(urlEvent, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                eventName: 'timeOfday'
            }),
        })
            .then(response => response.json())
            .then((data) =>
                dispatch({
                    type: TIME_SUCCESS,
                    payload: data,
                })
            )

            .catch((error) => dispatch({
                type: TIME_FAIL,
                error: true,
                payload: new Error(error),
            }))
    }
}