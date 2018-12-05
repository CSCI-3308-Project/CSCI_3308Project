import React from 'react';
import './css/landing.css'

class Landing extends React.Component {
  render() {
    const imgSrc = "https://4dttx13zn7901db8sx1mg5n8-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/iStock-492654918-1024x680.jpg";
    return (
      <div className = "Landing">
        <img src={imgSrc} className="bg" alt="Study Buddies"/>
      	<div className = "Body">
        	<h1> This page says some cool shit about us. Look at how cool we are!
        	</h1>
      	</div>
      </div>
    )
  }
};

export default Landing;
