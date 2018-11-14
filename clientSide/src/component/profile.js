import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import './auth.css'
import {Element} from 'react-stylesheet'


class home extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  

  render(){
    return(




        <div class = "container">
        

        <Element
        background = "green"
        color = "white"
        >
        <h1>
           <center>Tell us about you! </center>
          </h1>
        </Element>
        
   <label>
        What classes are you in </label>

        <form>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 1300 Intro to Computer Science " />CSCI 1300 Intro to Computer Science
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 2270 Data Structures" />CSCI 2270 Data Structures
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 2400 Computer Systems" />CSCI 2400 Computer Systems
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 2824 Discrete Math" />CSCI 2824 Discrete Math
<div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 3104 Algorithms" />CSCI 3104 Algorithms
          <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="class" value="CSCI 3010 Programming Workshop" />CSCI 3010 Programming Workshop
        <div>&nbsp;</div>
        </form>



 <label>
        Where do you like to study? </label>
        <form>
          <input onChange={this.handleClassChoice} type="checkbox" name="loc" value="Norlin Library" />Norlin Library 
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="loc" value="Engineering CSEL" />Engineering CSEL
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="loc" value="Engineering Lobby" />Engineering Lobby
           <div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="loc" value="Math Building" />Math Building
<div>&nbsp;</div>
          <input onChange={this.handleClassChoice} type="checkbox" name="loc" value="Earth Sciences Building" />Earth Sciences Building 
          <div>&nbsp;</div>
        </form>




   
        

       
              
</div>




      );
  }
}

  export default home;
