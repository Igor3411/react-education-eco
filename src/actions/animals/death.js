import { DEATH } from "../../const/const";

export default function death(name, place, killer) {
  return dispatch => {
    dispatch({
      type: DEATH,
      payload: {
        placeX: place[1],
        placeY: place[0],
        name,
        killer,
        massage: killer
          ? `${name}  убит ${killer} на ${place[0]}:${place[1]}`
          : `${name} умер на ${place[0]}:${place[1]}`
      }
    });
  };
}
