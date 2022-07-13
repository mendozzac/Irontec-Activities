import useActivity from "../../hooks/useActivity";
import { Activity } from "../../types";
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivitiesList = () => {
  const { activity } = useActivity();

  const activities = localStorage.getItem("activity");

  const activitiesData: Activity[] = [];
  activitiesData.push(activity);

  const activitiesStorage: Activity[] = activities
    ? JSON.parse(activities)
    : localStorage.setItem("activity", JSON.stringify(activitiesData));

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activitiesStorage?.map((activityStorage) => (
          <ActivityCard
            activity={activityStorage}
            key={activityStorage.activity}
          />
        ))}
      </ul>
    </>
  );
};

export default ActivitiesList;
