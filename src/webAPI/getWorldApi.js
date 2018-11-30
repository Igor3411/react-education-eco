import {getUrl} from '../const/const'

export default function getWorldApi(name) {
    return fetch(getUrl + name + "", {
        method: 'get'
    })
}