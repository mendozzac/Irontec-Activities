import { Activity } from "../../types";
import "./ActivityCard.scss";

interface Card {
  activity: Activity;
}

const ActivityCard: React.FC<Card> = (activity) => {
  return (
    <>
      <li>
        <div className="data-card">
          {activity ? (
            <>
              <span className="data-card_title">
                {activity.activity.activity}
              </span>
              <span>{activity.activity.type}</span>
              <span>{activity.activity.participants}</span>
              <span>{activity.activity.price}</span>
              <span>{activity.activity.link}</span>
              <span>{activity.activity.key}</span>
              <span>{activity.activity.accessibility}</span>
            </>
          ) : (
            <span>hola</span>
          )}
        </div>
      </li>
    </>
  );
};

export default ActivityCard;
