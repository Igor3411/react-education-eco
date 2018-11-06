import {combineReducers} from "redux";
import worldReducer from "./world";

export const rootReducer = combineReducers({
  world: worldReducer
});
