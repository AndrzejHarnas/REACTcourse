import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i'am React APP </h1>
        <p> This is really working </p>
        <Person />
      </div>
    );

//    return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Hi its working!!!'))
  }
}

export default App;
