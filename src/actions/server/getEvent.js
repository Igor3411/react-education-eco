import {EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAIL, urlEvent} from '../../const/const'

export default function getEvent() {
    return dispatch => {
        dispatch({
            type: EVENT_REQUEST,
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
                    type: EVENT_SUCCESS,
                    payload: data,
                })
            )

            .catch((error) => dispatch({
                type: EVENT_FAIL,
                error: true,
                payload: new Error(error),
            }))
    }
}