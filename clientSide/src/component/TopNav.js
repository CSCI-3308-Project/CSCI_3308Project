import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom"

class TopNav extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Study Buddies</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/login" to="/login">
              Login
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/register" to="/register">
              Register
            </NavItem>
            <NavItem> 
            <a href="https://github.com/CSCI-3308-Project"> GitHub </a> 
            </NavItem> 
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default TopNav;
