import {DEATH_RABBIT} from '../../const/const'
import {KILL_RABBIT} from '../../const/const'

export default function death(name, place, killer) {
    return dispatch => {
        if (killer) {
            dispatch({
                type: KILL_RABBIT,
                place: place,
                name: name,
                killer: killer,
                massage: name + " убит " + killer + " на " + place,
            });
        } else {
            dispatch({
                type: DEATH_RABBIT,
                placeX: place[1],
                placeY: place[0],
                name: name,
                massage: name + " умер на " + place[0] + ":" + place[1],
            });
        }
    }
}