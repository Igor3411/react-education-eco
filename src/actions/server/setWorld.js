import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, url} from '../../const/const'

export default function setWorld(name, events, map) {
    console.log(name)
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });
        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                user: name,
                map: map,
                events: events,
            }),
        })
            .then(() =>
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