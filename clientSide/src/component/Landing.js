import React from 'react';
import './landing.css'

class Landing extends React.Component {
  render() {
    return (
      <div className = "Landing">
      	<div className = "Body"> 
        	<h1> Study Buddies allow you to connect with other students on your local campus so that you 
        	can work on assignments together or study for exams or quizzes. Our hope is that this will 
        	allow students to better their learning efficiency by studying as a collective. Study Buddies 
        	will allow you to meet up with students in the real world who are working on the same classes as you are. 
        	Our aim is to bridge the gap between students in CSCI at CU Boulder who need help on assignments but
        	are unwilling to reach out to each other. 
        	</h1> 
      	</div> 
      </div>
    )
  }
}; 

export default Landing;