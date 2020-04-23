import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Course extends Component {
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
