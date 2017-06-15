import React from 'react';
// import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const NavBar =() => {
  return (
    <div id="navbar">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Y. Arin Choi - Portfolio</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="https://www.chroniclesofarin.com">Back To Blog</NavItem>
          <NavItem eventKey={2} href="#">My Resume</NavItem>
          <NavItem eventKey={3} href="#">Email Me</NavItem>
        </Nav>
      </Navbar>
    </div>
    );
}

export default NavBar;
