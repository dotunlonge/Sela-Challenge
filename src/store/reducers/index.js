import { combineReducers } from "redux";
import projectReducer from "./project";

export default combineReducers({
  app: projectReducer
});
