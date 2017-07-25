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
          <NavItem eventKey={2} href="YAC_resume.pdf">My Resume</NavItem>
          <NavItem eventKey={3} href="mailto:yej.arin.choi@gmail.com?Subject=From%20your%20portfolio%20page" target="_top">Email Me</NavItem>
        </Nav>
      </Navbar>
    </div>
    );
}

export default NavBar;
