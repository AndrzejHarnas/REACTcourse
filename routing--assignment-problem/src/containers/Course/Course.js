import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Course extends Component {
  state ={
    coursetitle: ''
  }


  parsQueryParams () {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for(let param of query.entries()) {
      if(this.state.coursetitle !== param[1]) {
        this.setState({coursetitle: param[1]});
      }
      console.log(param);
  }
}
  componentDidMount () {

    this.parsQueryParams();

  }

  componentDidUpdate () {
    this.parsQueryParams();

  }
    render () {
        return (
            <div>
                <h1>{this.props.match.params.coursetitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseid}</p>
            </div>
        );
    }
}

export default Course;
