import React from "react";
import logo from "../../assets/imgs/freetogame-logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container container-fluid">
        <Link to="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Logo Free To Game"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
