import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import './auth.css'

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({ [event.target.type]: event.target.value });
  }

  isConfirmedPassword = event => {
  return (event === this.state.password)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios.post(`http://localhost:8000/auth/signup`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
}

  render() {
    return (
      <div className="SignUp">
        <h1 className="SignUp_Banner">Lets get you signed up!</h1>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>email</ControlLabel>
              <FormControl autoFocus type="email"
                defaultValue={this.state.email}
                onChange={this.handleChange.bind(this)}
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>password</ControlLabel>
              <FormControl autoFocus type="password"
                defaultValue={this.state.password}
                onChange={this.handleChange.bind(this)}
                />
            </FormGroup>
            <FormGroup controlId="confirm_password" bsSize="large">
              <ControlLabel>confirm password</ControlLabel>
              <FormControl autoFocus type="password"
                defaultValue={this.state.confirm_password}
                onChange={this.handleChange.bind(this)}
                />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type='submit'
            >
              Sign up!
            </Button>
          </form>
      </div>
    )
  }
}

export default SignUp;
