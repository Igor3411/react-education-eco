import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, url} from '../const/const'

export default function setWorld(name) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });
        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": " charset=UTF-8"
            },
            body: JSON.stringify({
                user: name,
                map: {1: 1},
                events: [{1: 1}, {1: 2}]
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