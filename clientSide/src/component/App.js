import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import SimpleStorage from "react-simple-storage";

import AuthService from './AuthService';

import SignUp from './SignUp';
import TopNav from './TopNav';
import Error from './Error';
import Login from './Login';
import Home from './Home';
import Landing from './Landing';
<<<<<<< HEAD
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
=======

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      isLoaded: false
    };
    this.Auth = new AuthService();
    this.handleLogin = this.handleLogin.bind();
>>>>>>> b22a5e4868d00649e2e3d7ca8c18a28b976b0a36
  }

  componentDidMount() {
    if (this.Auth.loggedIn()) {
        this.setState({loggedIn: true});
    }
    else {
        this.setState({loggedIn: false});
    }
  }

  handleLogin = event => {
    localStorage.setItem("profile", JSON.stringify(this.Auth.getProfile()));
    this.setState({loggedIn: true,
                   isLoaded: true
      });
  }

<<<<<<< HEAD
class App extends Component {
=======
  handleLogout = event => {
    this.Auth.logout();
    this.setState({loggedIn: false});
  }

>>>>>>> b22a5e4868d00649e2e3d7ca8c18a28b976b0a36
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
          <Switch>
            <Route path="/register" render= {(props) => <SignUp {...props} handleLogin={this.handleLogin} />} />
            <Route path="/login" render= {(props) => <Login {...props} handleLogin={this.handleLogin} />} />
            <Route path="/home" render= {(props) => <Home {...props} isLoaded={this.state.isLoaded} />} />
<<<<<<< HEAD
            <Route path="/message" render= {(props) => <Message {...props} handlemessage={this.state.handlemessage} />}>
=======
>>>>>>> b22a5e4868d00649e2e3d7ca8c18a28b976b0a36
	          <Route path="/" component={Landing} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
