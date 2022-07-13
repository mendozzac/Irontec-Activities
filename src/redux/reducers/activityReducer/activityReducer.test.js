import { loadActivityAction } from "../../actions/actionCreator";
import activityReducer from "./activityReducer";

const activity = {
  activity: "Play a game of Monopoly",
  type: "social",
  participants: 4,
  price: 0.2,
  link: "",
  key: "",
  accessibility: 0.3,
};

describe("Given an activityReducer", () => {
  describe("When it receives an action loadActivity", () => {
    test("Then it should return a new activity", () => {
      const action = loadActivityAction(activity);
      const newActivity = activityReducer({}, action);

      expect(newActivity).toEqual(activity);
    });
  });

  describe("When it receives an action unexpected and an activity", () => {
    test("Then it should return the current activity", () => {
      const action = { type: "loQueSea" };
      const newActivity = activityReducer(activity, action);

      expect(newActivity).toEqual(activity);
    });
  });
});
