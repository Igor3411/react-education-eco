import { SET_MAP } from "../../const/const";

export default function setMap(map) {
  console.log(map);
  return dispatch => {
    dispatch({
      type: SET_MAP,
      payload: map
    });
  };
}
