import React from 'react';
//import './Person.css';
import classes from './Person.css'


const Person = (props) => {
  console.log('[Person.js] rendering')
return(
  <div className= {classes.Person}>
  <p onClick={props.click}> I'm a {props.name} and i am {props.age}  years old! </p>
  <p>{props.children}</p>
  <input type="text" onChange = {props.changed} value={props.name} />
  </div>
)

}

export default Person;
