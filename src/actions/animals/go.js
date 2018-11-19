import {GO_RABBIT} from '../../const/const'

export default function go(name, place, goto) {
    // console.log(place)
    return dispatch => {
        switch (goto) {
            case "top":
                if (name === 'Rabbit') {
                    dispatch({
                        type: GO_RABBIT,
                        goto: [place[0] - 1, place[1]],
                    });
                }
                break;
            case "bottom":
                if (name === 'Rabbit') {
                    dispatch({
                        type: GO_RABBIT,
                        goto: [place[0] + 1, place[1]],
                    });
                }
                break;
            case "left":
                if (name === 'Rabbit') {
                    dispatch({
                        type: GO_RABBIT,
                        goto: [place[0], place[1] - 1],
                    });
                }
                break;
            case "right":
                if (name === 'Rabbit') {
                    dispatch({
                        type: GO_RABBIT,
                        goto: [place[0], place[1] + 1],
                    });
                }
                break;
            default:
                break;
        }
    }
}