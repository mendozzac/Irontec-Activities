import { useEffect } from "react";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import useActivity from "../../hooks/useActivity";
import "./ActivitiesPage.scss";

const ActivitiesPage = () => {
  const { loadActivity } = useActivity();

  useEffect(() => {
    loadActivity();
  }, [loadActivity]);

  const onReload = () => {
    localStorage.removeItem("activity");
    loadActivity();
  };

  return (
    <div className="container">
      <ActivitiesList />
      <button className="reload-button" onClick={onReload}>
        Reload
      </button>
    </div>
  );
};

export default ActivitiesPage;
