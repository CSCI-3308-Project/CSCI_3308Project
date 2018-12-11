import React from 'react';
import {withRouter} from "react-router-dom";
import {Row, Col } from "mdbreact";

import {Footer} from 'react-materialize';
import './css/BotNav.css';

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

  }

    className='example'
  >
  </Footer>

</div>
);
 }
}

export default withRouter(BotNav);
