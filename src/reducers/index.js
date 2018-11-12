import {combineReducers} from "redux";
import worldReducer from "./world";
import animalsReducer from "./animals";

export const rootReducer = combineReducers({
  world: worldReducer,
  animals: animalsReducer,
});
