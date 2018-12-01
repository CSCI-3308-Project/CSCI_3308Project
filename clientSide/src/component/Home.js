import React, { Component } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

var dataAxios = axios.create({
  withCredentials: true,
  crossDomain: true
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      columns: [{
          dataField: 'post_id',
          text: 'Post Number',
          hidden: true
        }, {
          dataField: 'course',
          text: 'Course',
          sort: true,
          headerStyle: (colum, colIndex) => {
            return { width: '100px'};
          }
        }, {
          dataField: 'location',
          text: 'Location',
          sort: true,
          headerStyle: (colum, colIndex) => {
            return { width: '100px' };
          }
        }, {
          dataField: 'email',
          text: 'Contact Information',
          headerStyle: (colum, colIndex) => {
            return { width: '180px' };
          }
        }, {
          dataField: 'note',
          text: 'Message'
        }]
    }
    this.HandleQuery = this.HandleQuery.bind();
  }

  componentDidMount() {
      this.InitialQuery();
  }


  InitialQuery = ()  => {
    var profile = JSON.parse(localStorage.getItem('profile'));
    dataAxios.post(`http://localhost:8000/data`, profile.user.user_courses)
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

  render() {
    const { isLoaded, tableData, columns } = this.state;
    return (
        <div className="container">
          <div className="table" style={{ marginTop: 50 }}>
          { isLoaded && (
            <BootstrapTable
            striped
            hover
            keyField='post_id'
            data={ tableData }
            columns={ columns } />
          )}
          </div>
        </div>
    );
  }
}

export default Home;
