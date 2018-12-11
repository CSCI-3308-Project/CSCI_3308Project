import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col } from "mdbreact";

import { Footer } from 'react-materialize';
import './css/BotNav.css';

var contact_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";
var help_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";
var about_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";

export class BotNav extends Component {
  render(){
    return (
      <div>
        <Footer
        className='example'
        copyrights="&copy; 2018 Copyright Text"
        links={
          <Row className="navRow">
            <Col className="navItem" ><a href={contact_link} target="_blank" rel="noopener noreferrer">Contact Us</a></Col>
            <Col className="navItem" ><a href={about_link} target="_blank" rel="noopener noreferrer">About Us</a></Col>
            <Col className="navItem" ><a href={help_link} target="_blank" rel="noopener noreferrer">Help</a></Col>
          </Row>
        }
        >
        </Footer>
      </div>
      )
  }
}

export default withRouter(BotNav);
