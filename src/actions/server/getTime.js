import { TIME_REQUEST, TIME_SUCCESS, TIME_FAIL } from "../../const/const";
import getTimeApi from "../../webAPI/getTimeApi";

export default function getTIME() {
  return dispatch => {
    dispatch({
      type: TIME_REQUEST
    });

    getTimeApi()
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: TIME_SUCCESS,
          payload: data
        })
      )

      .catch(error =>
        dispatch({
          type: TIME_FAIL,
          error: true,
          payload: new Error(error)
        })
      );
  };
}
