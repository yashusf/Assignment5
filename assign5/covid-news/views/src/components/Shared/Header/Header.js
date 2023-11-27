import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { FaVirusCovid } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="header-style">
        <Container>
          <Navbar.Brand
            className="flex align-items-center cursor-pointer"
            as={Link}
            to={'/'}
          >
            <FaVirusCovid
              style={{
                color: "white",
                marginRight: "4px",
                marginBottom: "7px",
              }}
            />
            COVID NEWS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/states"}>
                States
              </Nav.Link>
              <Nav.Link as={Link} to={"/about-us"}>
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
