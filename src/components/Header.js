import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [navBar, setNavBar] = useState(false);
  const toggleBackground = () => {
    if (window.scrollY >= 40) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", toggleBackground);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navBar ? "navbar-active" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon
            icon={faLaptopCode}
            style={{ paddingRight: "10px" }}
          />
          <span>NiFT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
