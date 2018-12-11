<<<<<<< HEAD
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col } from "mdbreact";
=======
import React from 'react';
import {withRouter} from "react-router-dom";
import {Row, Col } from "mdbreact";
>>>>>>> c98a54656f348be4e2ef7e0bb0b403a1340fe822

import { Footer } from 'react-materialize';
import './css/BotNav.css';

<<<<<<< HEAD
var contact_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";
var help_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";
var about_link = "https://mail.google.com/mail/?view=cm&fs=1&to=justin.adkins@colorado.edu";
=======
var about_React = "https://reactjs.org/tutorial/tutorial.html";
var about_NodeJS = "https://nodejs.org/en/about/";
var about_PSQL = "https://www.postgresql.org/about/";
export class BotNav extends React.Component {
  render(){
return (
<div>
{this.props.children}

  <Footer

  links={

    <Row>
      <Col sm = '8'><p>&copy; 2018 Copyright Text</p></Col>
      <Col sm='1'><a href={about_React} target="_blank" rel="noopener noreferrer">React</a></Col>
      <Col sm ='1'><a href={about_NodeJS} target="_blank" rel="noopener noreferrer">Node.js</a></Col>
      <Col sm = '1'><a href={about_PSQL} target="_blank" rel="noopener noreferrer">PostgreSQL</a></Col>
      
    </Row>
>>>>>>> c98a54656f348be4e2ef7e0bb0b403a1340fe822

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
<<<<<<< HEAD
=======

    className='example'
  >
  </Footer>

</div>
);
 }
>>>>>>> c98a54656f348be4e2ef7e0bb0b403a1340fe822
}

export default withRouter(BotNav);
