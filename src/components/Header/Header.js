import React from "react";
import logo from "../../assets/imgs/freetogame-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container container-fluid">
        <a href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Logo Free To Game"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
