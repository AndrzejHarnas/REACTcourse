import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
const [personsState, setPersonsState] = useState({
  persons: [
    {name: 'Max', age: 28 },
    {name: 'Manu', age: 29 },
    {name: 'Stephany', age: 26 }
  ]
});

const [otherState, serOtherState] = useState('some other value');


const switchNameHandler = () => {
//    console.log('i was cklicked');
 setPersonsState({
   persons: [
       {name: 'Maximilian', age: 28 },
       {name: 'Manu', age: 29 },
       {name: 'Stephany', age: 27 }
     ]
   });
};



return (
      <div className="App">
        <h1>Hi i'am React APP </h1>
        <p> This is really working </p>
        <button onClick={switchNameHandler}> Switch Name </button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );

}

export default app;
