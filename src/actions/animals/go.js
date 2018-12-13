import { GO } from "../../const/const";
import goToPlace from "../../utils/goToPlace";

export default function go(name, place, goto) {
  return dispatch => {
    const data = goToPlace(name, place, goto);
    dispatch({
      type: GO,
      payload: data
    });
  };
}
