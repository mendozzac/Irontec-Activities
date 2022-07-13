import { useState } from "react";
import "./Menu.scss";

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onShowMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <>
      <div
        onClick={onShowMenu}
        className={`main-header__burger ${isActive ? "active" : ""}`}
      >
        <div></div>
        <div></div>
      </div>
      <div className={`main-menu-container${isActive ? "__active" : ""}`}>
        <h1>Filter</h1>
        <nav className="main-menu">
          <form className="main-menu_form">
            <label htmlFor="activity">Activity</label>
            <input className="main-menu_element" type="text" id="activity" />
            <label htmlFor="type">Type</label>
            <select className="main-menu_element" id="type">
              <option>Value</option>
            </select>
          </form>
        </nav>
      </div>
    </>
  );
};

export default Menu;
