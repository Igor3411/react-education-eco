import { SET_TARGET } from "../../const/const";

export default function setTarget(name) {
  return dispatch => {
    dispatch({
      type: SET_TARGET,
      payload: name
    });
  };
}
