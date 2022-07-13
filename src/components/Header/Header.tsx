import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-box">
          <Menu />
          <div className="header-title">Irontec</div>
        </div>
      </header>
    </>
  );
};

export default Header;
