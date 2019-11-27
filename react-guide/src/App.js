import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = ({
  persons: [
    {name: 'Max', age: 28 },
    {name: 'Manu', age: 29 },
    {name: 'Stephany', age: 26 }
  ],
  otherState: 'some other value'
});

switchNameHandler = (newName) => {
//    console.log('i was cklicked');
 this.setState({
   persons: [
       {name: newName, age: 28 },
       {name: 'Manu', age: 29 },
       {name: 'Stephany', age: 27 }
     ],
     showPersons: false
   });
};

nameChangeHandler = (event) => {
  this.setState({
    persons: [
        {name: 'Max', age: 28 },
        {name: event.target.value, age: 29 },
        {name: 'Stephany', age: 27 }
      ]
    });
};


togglePersonsHandler =() => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

render(){
  const style = {
    backgroundColor:'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }
return (
      <div className="App">
        <h1>Hi i'am React APP </h1>
        <p> This is really working </p>
        <button
         style={style}
         onClick={() => this.togglePersonsHandler()}> Switch Name </button>
        { this.state.showPersons ?
          <div>
            <Person
             name={this.state.persons[0].name}
             age={this.state.persons[0].age}
             /><Person
             name={this.state.persons[1].name}
             age={this.state.persons[1].age}
             click={this.switchNameHandler.bind(this, 'Andrzej')}
             changed={this.nameChangeHandler}>
             My Hobbies: racing </Person>
            <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div> : null
      }
      </div>
    );
}
}

export default App;
