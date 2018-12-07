import { EATING, EAT_LIST } from "../../const/const";

export default function eat(name) {
  return dispatch => {
    dispatch({
      type: EATING,

      payload: {
        name,
        satiety: EAT_LIST[name.slice(0, 3)]
      }
    });
  };
}
