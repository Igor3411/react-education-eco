import { CURRENT_PLACE } from "../../const/const";

export default function currentOn(name) {
  return dispatch => {
    dispatch({
      type: CURRENT_PLACE,
      payload: name
    });
  };
}
