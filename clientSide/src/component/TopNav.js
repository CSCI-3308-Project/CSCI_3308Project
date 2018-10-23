import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const TopNav = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Study Buddy
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <Navbar.Text>Powered by MasNut</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
