import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/imgs/freetogame-logo.png";
import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Logo Free To Game"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Free Games" menuVariant="dark">
              <NavDropdown.Item href="/games/mmorpg">MMORPG</NavDropdown.Item>
              <NavDropdown.Item href="/games/shooter">Shooter</NavDropdown.Item>
              <NavDropdown.Item href="/games/moba">MOBA</NavDropdown.Item>
              <NavDropdown.Item href="/games/anime">Anime</NavDropdown.Item>
              <NavDropdown.Item href="/games/battle-royale">
                Battle Royale
              </NavDropdown.Item>
              <NavDropdown.Item href="/games/strategy">
                Strategy
              </NavDropdown.Item>
              <NavDropdown.Item href="/games/fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="/games/sci-fi">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="/games/card-games">
                Card Games
              </NavDropdown.Item>
              <NavDropdown.Item href="/games/racing">Racing</NavDropdown.Item>
              <NavDropdown.Item href="/games/fighting">
                Fighting
              </NavDropdown.Item>
              <NavDropdown.Item href="/games/social">Social</NavDropdown.Item>
              <NavDropdown.Item href="/games/sports">Sports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/games">
                Free-To-Play Games
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Browser Games" menuVariant="dark">
              <NavDropdown.Item href="/browser/mmorpg">
                Browser MMORPG
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/shooter">
                Browser Shooter
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/strategy">
                Browser Strategy
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/fantasy">
                Browser Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/sci-fi">
                Browser Sci-Fi
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/card-games">
                Browser Card Games
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/racing">
                Browser Racing
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/social">
                Browser Social
              </NavDropdown.Item>
              <NavDropdown.Item href="/browser/sports">
                Browser Sports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/browser">Browser Games</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
