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
import Message from './Message';

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
          <TopNav loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
          <Switch>
            <Route path="/register" render= {(props) => <SignUp {...props} handleLogin={this.handleLogin} />} />
            <Route path="/login" render= {(props) => <Login {...props} handleLogin={this.handleLogin} />} />
            <Route path="/home" render= {(props) => <Home {...props} isLoaded={this.state.isLoaded} />} />
            <Route path="/message" render= {(props) => <Message {...props} handlemessage={this.state.handlemessage} />}>
	          <Route path="/" component={Landing} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
