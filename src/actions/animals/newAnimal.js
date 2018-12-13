import { NEW_ANIMAL } from "../../const/const";

export default function newAnimal(name, place) {
  return dispatch => {
    dispatch({
      type: NEW_ANIMAL,
      payload: {
        name,
        place
      }
    });
  };
}
