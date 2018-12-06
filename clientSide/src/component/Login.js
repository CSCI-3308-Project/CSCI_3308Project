import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import AuthService from './AuthService';
import './css/auth.css'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    if(this.Auth.loggedIn()) {

      this.props.history.replace('/home');
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({ [event.target.type]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        this.props.handleLogin();
      })
      .then(res => {
        this.props.history.replace('/home');
      })
      .catch(err => {
          alert(err);
      })
  }


  render() {
    const imgSrc = "https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=road-landscape-mountains-67517.jpg&fm=jpg";
    return (
      <div className="Login">
        <img src={imgSrc} className="bg" alt="Mountains with road"/>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="email"
                defaultValue={this.state.email}
                placeholder="name@example.com"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl autoFocus type="password"
                defaultValue={this.state.password}
                placeholder="Six characters or longer"
                onChange={this.handleChange}
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
          <h2> “Two roads diverged in a wood, and I – I took the one less traveled by.” -Robert Frost </h2>
        </div>
      </div>

    )
  }
}

export default Login;
