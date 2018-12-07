import { GO } from "../../const/const";

export default function go(name, place, goto) {
  return dispatch => {
    switch (goto) {
      case "top":
        dispatch({
          type: GO,
          payload: {
            goto: [place[0] - 1, place[1]],
            gotoX: place[1],
            gotoY: place[0] - 1,
            gofromX: place[1],
            gofromY: place[0],
            gofrom: [place[0], place[1]],
            name
          }
        });
        break;
      case "bottom":
        dispatch({
          type: GO,
          payload: {
            goto: [place[0] + 1, place[1]],
            gotoX: place[1],
            gotoY: place[0] + 1,
            gofromX: place[1],
            gofromY: place[0],
            name
          }
        });
        break;
      case "left":
        dispatch({
          type: GO,
          payload: {
            goto: [place[0], place[1] - 1],
            gotoX: place[1] - 1,
            gotoY: place[0],
            gofromX: place[1],
            gofromY: place[0],
            gofrom: [place[0], place[1]],
            name
          }
        });
        break;
      case "right":
        dispatch({
          type: GO,
          payload: {
            goto: [place[0], place[1] + 1],
            gotoX: place[1] + 1,
            gotoY: place[0],
            gofromX: place[1],
            gofromY: place[0],
            gofrom: [place[0], place[1]],
            name
          }
        });
        break;
      default:
        break;
    }
  };
}
