import { combineReducers } from "redux";
import worldReducer from "./world";
import animalsReducer from "./animals";

const rootReducer = combineReducers({
  world: worldReducer,
  animals: animalsReducer
});

export default rootReducer;
