import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxn/Auxn';
import AuthContext from '../context/auth-context';


class App extends Component {

constructor(props){
  super(props);
  console.log('[App.js] constructor' );

}

state = ({
  persons: [
    {id:'1', name: 'Max', age: 28 },
    {id:'2', name: 'Manu', age: 29 },
    {id:'3', name: 'Stephany', age: 26 }
  ],
  showPersons: false,
  otherState: 'some other value',
  showCockpit: true,
  changeCounter: 0,
  authenticated: false
});

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps');
  return state;
}

componentDidMount(){
    console.log('[App.js] componentDidMount');
}


shouldComponentUpdate(nextProps, nextSate) {
  console.log('[App.js] shouldComponentUpdate');
  return true;
}


componentDidUpdate(prevProps, PrevState) {
     console.log('[App.js] componentDidUpdate');
}


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

this.setState((prevState, props) => {
  return { persons: persons,
    changeCounter: prevState.changeCounter + 1
  };
 });
};




togglePersonsHandler =() => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

loginHandler = () => {
  this.setState({authenticated: true});
}


render(){
console.log('[App.js] Render')
let persons = null;


if(this.state.showPersons) {
  persons = (
    <div>
     <Persons persons={this.state.persons}
      clicked = {this.deletePersonHandler}
      changed={this.nameChangeHandler}
      isAutenticated={this.state.authenticated} />
  </div>
        );

}

return (
      <Aux>
      <button onClick={ ()=>{this.setState({showCockpit: false})}}> Remove Cockpit</button>
        <AuthContext.Provider value = {{authenticated: this.state.authenticated, login: this.loginHandler }}>
        {this.state.showCockpit ? (
            <Cockpit
            title = {this.props.appTitle}
            showPersons ={this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
         />
       ) : null }
        {persons}
        </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
