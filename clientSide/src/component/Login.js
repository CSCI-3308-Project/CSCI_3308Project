import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import './css/auth.css'

var loginAxios = axios.create({
  withCredentials: true,
  crossDomain: true
});

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

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({ [event.target.type]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    loginAxios.post(`http://localhost:8000/auth/login`, user)
      .then(res => {
        console.log(res);
        //console.log(res.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    return (
      <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="email"
                defaultValue={this.state.email}
                onChange={this.handleChange.bind(this)}
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl autoFocus type="password"
                defaultValue={this.state.password}
                onChange={this.handleChange.bind(this)}
                />
            </FormGroup>
            <Button className = "loginBtn"
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type='submit'
            >
              Login!
            </Button>
          </form>
        <div className = "LoginBody">
          <h1> Study Buddies is dedicated to bettering your student experience! </h1>
        </div>
      </div>

    )
  }
}

export default Login;
