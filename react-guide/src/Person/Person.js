import React from 'react';
//import './Person.css';
import styled from 'styled-components';
import classes from './Person.css'


const Person = (props) => {

const rnd = Math.random();

if(rnd > 0.7) {
  throw new Error('coś poszło nie tak')
}

const StyledDiv =   styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 15px;
    text-align: center;

   @media(min-width: 500px) {
      width: 450px;
  }`;

return(
  <div className= {classes.Person}>
  <p onClick={props.click}> I'm a {props.name} and i am {props.age}  years old! </p>
  <p>{props.children}</p>
  <input type="text" onChange = {props.changed} value={props.name} />
  </div>
)

}

export default Person;
