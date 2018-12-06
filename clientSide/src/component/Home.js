import React, { Component } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Select from 'react-select';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import AuthService from './AuthService';
import { courseData } from './courseData';
import './css/home.css'

var dataAxios = axios.create({
  withCredentials: true,
  crossDomain: true
});

var profile = JSON.parse(localStorage.getItem('profile'));

function colFormatter(cell) {
  var link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + cell;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">{cell}</a>
  )
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      user_courses: "",
      selectedCourses: []
    }
    this.Auth = new AuthService();
    this.HandleQuery = this.HandleQuery.bind();
    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  componentDidMount() {
    if (!this.Auth.loggedIn()) {
        this.props.history.replace('/login')
    } else {
      this.InitialQuery();
    }
  }

  InitialQuery = ()  => {
    dataAxios.post(`http://localhost:8000/data`, profile.user.user_courses)
      .then(res => this.setState({tableData: res.data, isLoaded: true, user_courses: profile.user.user_courses}))
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

  handleMultiChange = event => {
    this.setState(state => {
      return {
        selectedCourses: event
      };
    });
  }

  render() {
    const imgSrc = "https://images.unsplash.com/photo-1506783323968-e8dad28ae1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80";
    const { isLoaded, tableData, user_courses} = this.state;
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
        formatter: colFormatter,
        headerStyle: (column, colIndex) => {
          return { width: '280px' };
        }
      }, {
        dataField: 'note',
        text: 'Message'
      }];

      const defaultSorted = [{
        dataField: 'course',
        order: 'asc'
      }];


    return (
        <div className="container">
        <img src={imgSrc} className="bg" alt="Dark Blue Beach"/>
          <div className="addPost">
          <Form inline>
            <ControlLabel id="courseTitle">Course Select</ControlLabel>
            <div className="inlineSelect">
              <Select
                isMulti
                options={ courseData }
                className="basic-multi-select"
                value={ this.state.selectedCourses }
                onChange={ this.handleMultiChange }
              />
            </div>
            <FormGroup>
              <ControlLabel id="locationTitle">Location</ControlLabel>
              <FormControl id="locationField" type="text" placeholder="CSEL" />
            </FormGroup>
            <Button type="submit" id="postButton">Click this!</Button>
          </Form>
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
