import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = ({
  persons: [
    {id:'1', name: 'Max', age: 28 },
    {id:'2', name: 'Manu', age: 29 },
    {id:'3', name: 'Stephany', age: 26 }
  ],
  showPersons: false,
  otherState: 'some other value'
});

switchNameHandler = (newName) => {
//    console.log('i was cklicked');
 this.setState({
   persons: [
       {id:'1', name: newName, age: 28 },
       {id:'2', name: 'Manu', age: 29 },
       {id:'3', name: 'Stephany', age: 27 }
     ],
     showPersons: false
   });
};

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons})


}

nameChangeHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {
  ...this.state.persons[personIndex]
 };

person.name = event.target.value;
const persons = [...this.state.persons];
persons[personIndex] = person;

this.setState({ persons: persons  });
}


togglePersonsHandler =() => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

render(){
  const style = {
    backgroundColor:'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

let persons = null;

if(this.state.showPersons) {
  persons = (
    <div>
     { this.state.persons.map((person, index) => {
       return <Person
       click = {() => this.deletePersonHandler(index)}
       name = {person.name}
       age = {person.age}
       key = {person.id}
       changed={(event) => this.nameChangeHandler(event, person.id)} />
     })}
  </div>
        );
 style.backgroundColor = 'red';
}


return (
      <div className="App">
        <h1>Hi i'am React APP </h1>
        <p> This is really working </p>
        <button
         style={style}
         onClick={() => this.togglePersonsHandler()}> Show or Hide Persons </button>
        {persons}
      </div>
    );
}
}

export default App;
