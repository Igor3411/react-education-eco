import { STARVATION } from "../../const/const";

export default function starvation(satiety, name) {
  return dispatch => {
    dispatch({
      type: STARVATION,
      payload: {
        name
      }
    });
  };
}
