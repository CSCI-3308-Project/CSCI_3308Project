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
        background = "#00BFFF"
        color = "white"
        >
        <h1>
           <center>WELCOME TO STUDY BUDDIES. </center>
          </h1>
        </Element>
        

   
        

       <form> 
      <label> <right>
        Search for your class:
        <input type="text" search="search" />
        </right>
      </label>
      <input type="submit" value="Submit" />


      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>




 </form>
        <label>
        What classes are you working on </label>

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
        </form>


       <form> 
      <label> <right>
        Would you like to check in so other students know you would like to find someone to study with?
        
        </right>
      </label>
      <form>
      <input onChange={this.handleClassChoice} type="checkbox" name="checkin" value="yes" />Yes,Check Me In!
           <div>&nbsp;</div>
      <input onChange={this.handleClassChoice} type="checkbox" name="checkin" value="yes" />No,Just Chilling!
           <div>&nbsp;</div>
      </form>


      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>




 </form>

              
</div>




    );
  }
}

  export default home;
