import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

// function handleClick(cell, row) {
//   const profile = JSON.parse(localStorage.getItem('profile'));
//   const post_id = { post_id: row.post_id };
//   buttonAxios.post(`http://localhost:8000/data/deletepost`, post_id, profile.user.user_courses)
//     .then(res => {
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

class StudyBuddyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableData: [],
        }
    }

    colFormatter(cell) {
      var link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + cell;
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">{cell}</a>
      )
    };


    render() {
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
        }];

        const defaultSorted = [{
          dataField: 'course',
          order: 'asc'
        }];
      return (

        <BootstrapTable
        striped
        hover
        keyField='post_id'
        data={ this.props.tableData }
        columns={ columns }
        defaultSorted={ defaultSorted } />
      )
    }
}

export default StudyBuddyTable;
