import { CLOSE_CURRENT } from "../../const/const";

export default function currentOff() {
  return dispatch => {
    dispatch({
      type: CLOSE_CURRENT
    });
  };
}
