import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from './SignUp';
import TopNav from './TopNav';
import Error from './Error';
import Login from './Login';
//import Homepage from './Homepage';
import home from './home'; 
import profile from './profile'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>

          <TopNav />
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={home} />
            <Route path="/profile" component={profile} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
