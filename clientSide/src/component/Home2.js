import React, { Component } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, ControlLabel, FormControl } from "react-bootstrap";
import Select from 'react-select';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import AuthService from './AuthService';
import QueryHelper from './QueryHelper';
import HomeDeleteButton from './HomeDeleteButton'
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
    this.PersonalQuery = this.PersonalQuery.bind();
    this.HandleQuery = this.HandleQuery.bind();
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
      .then(res => this.setState({tableData: res.data, isLoaded: true}))
      .catch(error => {
        console.error(error);
      });
  }

  HandleQuery = () => {
    dataAxios.get(`http://localhost:8000/data`)
      .then(res => this.setState({tableData: res.data }))
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

  colFormatter(cell) {
    var link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + cell;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">{cell}</a>
    )
  };

  buttonFormatter(cell, row) {
    var profile = JSON.parse(localStorage.getItem('profile'));
    if (cell === profile.user.user_id) {
      return (
          <HomeDeleteButton cell={cell} row={row} refresh={() => this.PersonalQuery} />
      )
    }
  };

  validateForm() {
    // return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    const imgSrc = "https://images.unsplash.com/photo-1506783323968-e8dad28ae1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80";
    const { isLoaded, tableData, selectedCourse, location, note } = this.state;
    const columns = [{
        dataField: 'post_id',
        text: 'Post Number',
        hidden: true
      }, {
        dataField: 'course',
        text: 'Course',
        sort: true,
        headerStyle: (column, colIndex) => {
          return { width: '100px'};
        }
      }, {
        dataField: 'location',
        text: 'Location',
        sort: true,
        headerStyle: (column, colIndex) => {
          return { width: '100px' };
        }
      }, {
        dataField: 'email',
        text: 'Contact Information',
        formatter: this.colFormatter,
        headerStyle: (column, colIndex) => {
          return { width: '280px' };
        }
      }, {
        dataField: 'note',
        text: 'Message'
      }, {
        dataField: 'user_id',
        text: '',
        formatter: this.buttonFormatter
      }];

      const defaultSorted = [{
        dataField: 'course',
        order: 'asc'
      }];

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
          { isLoaded && (
            <BootstrapTable
            striped
            hover
            keyField='post_id'
            data={ tableData }
            columns={ columns }
            defaultSorted={ defaultSorted } />
          )}
          </div>
        </div>
    );
  }
}

export default Home;
