import { TEMP_REQUEST, TEMP_SUCCESS, TEMP_FAIL } from "../../const/const";

import getTempApi from "../../webAPI/getTempApi";

export default function getTEMP() {
  return dispatch => {
    dispatch({
      type: TEMP_REQUEST
    });

    getTempApi()
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: TEMP_SUCCESS,
          payload: data
        })
      )

      .catch(error =>
        dispatch({
          type: TEMP_FAIL,
          error: true,
          payload: new Error(error)
        })
      );
  };
}
