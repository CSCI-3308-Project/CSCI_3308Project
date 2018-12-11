import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import {NavLink, Fa, Row, Col } from "mdbreact";

import {Footer} from 'react-materialize';
import './css/BotNav.css';

var contact_link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + "justin.adkins@colorado.edu";
var help_link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + "justin.adkins@colorado.edu";
var about_link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + "justin.adkins@colorado.edu";
export class BotNav extends React.Component {
  render(){
return (
<div>
{this.props.children}

  <Footer

  links={

    <Row>
      <Col sm = '8'><p>&copy; 2018 Copyright Text</p></Col>
      <Col sm='1'><a href={about_link} target="_blank" rel="noopener noreferrer">About Us</a></Col>
      <Col sm ='1'><a href={help_link} target="_blank" rel="noopener noreferrer">Help</a></Col>
      <Col sm = '1'><a href={contact_link} target="_blank" rel="noopener noreferrer">Contact Us</a></Col>
      
    </Row>

  }

  className='example'
  >
  </Footer>

</div>
);
 }
}

export default withRouter(BotNav);
