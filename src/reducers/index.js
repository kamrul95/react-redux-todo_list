import { combineReducers } from "redux";
import addReducer from "./addReducer";

const allReducers = combineReducers({
  tasks: addReducer
});
export default allReducers;