import React from "react";
import logo from "../../assets/imgs/logo-footer.png";

const Footer = () => {
  return (
    <footer className="pt-4 bg-dark">
      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://github.com/angel-dev-projects/freetogame-react" className="text-white text-decoration-none">
                  Git Hub Repository
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://github.com/angel-dev-projects" className="text-white text-decoration-none">
                  Author
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.freetogame.com/" className="text-white text-decoration-none">
                  Free To Game Page
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 ms-auto">
            <img src={logo} alt="Logo Free To Game"></img>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-2 border-top">
          <p className="text-white">
            © 2023, Digiwalls Media, all rights reserved. All trademarks are
            property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
