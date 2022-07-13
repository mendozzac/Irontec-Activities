import { AnyAction } from "redux";
import { ActionTypes } from "../../actions/enums";

const activityReducer = (activity = {}, action: AnyAction) => {
  let newActivity;

  switch (action.type) {
    case ActionTypes.loadActivity:
      newActivity = { ...action.activity };
      break;
    default:
      newActivity = activity;
  }
  return newActivity;
};

export default activityReducer;
