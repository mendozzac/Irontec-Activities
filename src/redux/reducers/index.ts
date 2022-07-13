import { combineReducers } from "redux";
import activityReducer from "./activityReducer/activityReducer";

export default combineReducers({
  activity: activityReducer,
});
