import React from 'react';
//import './Person.css';
import classes from './Person.css'


const Person = (props) => {

//const rnd = Math.random();

//if(rnd > 0.7) {
//  throw new Error('coś poszło nie tak')
//}


return(
  <div className= {classes.Person}>
  <p onClick={props.click}> I'm a {props.name} and i am {props.age}  years old! </p>
  <p>{props.children}</p>
  <input type="text" onChange = {props.changed} value={props.name} />
  </div>
)

}

export default Person;
