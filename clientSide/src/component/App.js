import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignUp from './SignUp';
import TopNav from './TopNav';
import Error from './Error';
import Login from './Login';
//import Homepage from './Homepage';
import Home from './Home';
import Profile from './Profile';
import Landing from './Landing';


const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100); //fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{
      pathname: "/login",
      state: { from: props.location }
    }}/>
  )}/>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>

          <TopNav />
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
	          <Route path="/" component={Landing} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
