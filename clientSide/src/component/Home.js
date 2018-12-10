import React, { Component } from 'react';
import axios from 'axios';
import { Button, ControlLabel, FormControl } from "react-bootstrap";
import Select from 'react-select';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import AuthService from './AuthService';
import StudyBuddyTable from './StudyBuddyTable'
import { courseData } from './data/courseData';
import { locationData } from './data/locationData';
import './css/home.css';

var dataAxios = axios.create({
  withCredentials: true,
  crossDomain: true
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      selectedCourse: "",
      location: "",
      note: ""
    }
    this.Auth = new AuthService();
    this.PersonalQuery = this.PersonalQuery.bind(this);
    this.HandleQuery = this.HandleQuery.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  profile = JSON.parse(localStorage.getItem('profile'));

  componentDidMount() {
    if (!this.Auth.loggedIn()) {
        this.props.history.replace('/login')
    } else {
      this.PersonalQuery();
    }
  }

  PersonalQuery = ()  => {
    dataAxios.post(`http://localhost:8000/data`, this.profile.user.user_courses)
      .then(res => this.setState({tableData: res.data}))
      .catch(error => {
        console.error(error);
      });
  }

  HandleQuery = () => {
    dataAxios.get(`http://localhost:8000/data`)
      .then(res => this.setState({tableData: res.data }, () => {
        console.log(res.data)
      }))
      .catch(error => {
        console.error(error);
      });
  }

  handleNoteChange = event => {
    console.log(event.target.value);
    this.setState({ note: event.target.value });
  }

  handleSelectChange = event => {
    this.setState({ selectedCourse: event });
  }

  handleLocationChange = event => {
    this.setState({ location: event });
  }

  handleSubmit = event => {
    var formatCourse = "CSCI_" + this.state.selectedCourse.value;
    console.log(formatCourse);
    const post = {
      user_id: this.profile.user.user_id,
      course: formatCourse,
      location: this.state.location.label,
      note: this.state.note
    };
    dataAxios.post(`http://localhost:8000/data/addpost`, post)
      .then(res => { this.PersonalQuery() })
      .catch(error => {
        console.error(error);
      });
  }

  validateForm() {
    // return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    const imgSrc = "https://images.unsplash.com/photo-1506783323968-e8dad28ae1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80";
    const { isLoaded, tableData, selectedCourse, location, note } = this.state;

    return (
        <div className="container">
        <img src={imgSrc} className="bg" alt="Dark Blue Beach"/>
          <div className="addPost">
            <form className="submitForm" onSubmit={ this.handleSubmit }>
              <ControlLabel id="courseTitle">Course Select</ControlLabel>
              <div className="inlineSelect">
                <Select
                  options={ courseData }
                  className="basic-multi-select"
                  value={ selectedCourse }
                  onChange={ this.handleSelectChange }
                />
              </div>
              <ControlLabel id="locationTitle">Location</ControlLabel>
              <div className="inlineSelect">
                <Select
                  options={ locationData }
                  className="basic-multi-select"
                  value={ location }
                  onChange={ this.handleLocationChange }
                />
              </div>
              <ControlLabel id="noteTitle">Description</ControlLabel>
              <FormControl type="text"
                id="noteField"
                defaultValue={ note }
                placeholder="Enter text"
                onChange={ this.handleNoteChange }
              />
              <Button className = "subBtn" type='submit'>Submit</Button>
            </form>
          </div>
          <div className="table" style={{ marginTop: 30 }}>
            <StudyBuddyTable profile={this.profile} tableData={ tableData }/>
          </div>
        </div>
    );
  }
}

export default Home;
