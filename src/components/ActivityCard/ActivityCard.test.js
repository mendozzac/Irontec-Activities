import { render, screen } from "@testing-library/react";
import ActivityCard from "./ActivityCard";
import TestRenderer from "react-test-renderer";

describe("Given an ActivityCard component", () => {
  describe("When it receives activity information", () => {
    test("Then it should render a card with the information of the activity", () => {
      const activity = {
        accessibility: 0.25,
        activity: "Make a simple musical instrument",
        key: "7091374",
        link: "",
        participants: 1,
        price: 0.4,
        type: "music",
      };

      render(<ActivityCard activity={activity} key={activity.key} />);
      const newActivity = screen.getByText("music");

      expect(newActivity).toBeInTheDocument();
    });
  });
  describe("When it receives an activity", () => {
    test("Then it should render a card with the activity", () => {
      const newActivity = {};

      const activityCard = TestRenderer.create(
        <ActivityCard activity={newActivity} key={newActivity.key} />
      );

      expect(activityCard.toJSON()).toMatchSnapshot();
    });
  });
});
