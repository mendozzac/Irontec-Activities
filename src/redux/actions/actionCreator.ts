import { Activity } from "../../types";
import { ActionTypes } from "./enums";

export const loadActivityAction = (activity: Activity) => ({
  type: ActionTypes.loadActivity,
  activity,
});
