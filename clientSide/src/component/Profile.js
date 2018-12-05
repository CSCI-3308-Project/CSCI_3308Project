import React from 'react';
import './css/auth.css'
import {Element} from 'react-stylesheet'

class Profile extends React.Component {

  render(){
    return(
        <div className = "container">
          <Element background = "green" color = "white">
            <h1>
               <center>Tell us about you!</center>
            </h1>
          </Element>
          What classes are you in?
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

          Where do you like to study?
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
        </div>
      )
    }
}

export default Profile;
