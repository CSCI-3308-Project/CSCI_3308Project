import React, { Component } from 'react';
import SignUp from './SignUp';
import TopNav from './TopNav';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <SignUp />
      </div>
    );
  }
}

export default App;
