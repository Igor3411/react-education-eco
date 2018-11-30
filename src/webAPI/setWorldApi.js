import {url} from '../const/const'

export default function setWorldApi(name, events, map) {
    return fetch(url, {
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
}