import { EATING, EAT_LIST } from "../../const/const";

export default function eat(name, place) {
  // console.log(place);
  return dispatch => {
    dispatch({
      type: EATING,

      payload: {
        name,
        satiety: EAT_LIST[name.slice(0, 3)],
        placeX: place[1],
        placeY: place[0]
      }
    });
  };
}
