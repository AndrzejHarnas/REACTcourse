import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {

const style ={
  '@media(min-width: 500px)': {
    
  }
}

return(
  <div className="Person">
  <p onClick={props.click}> I'm a {props.name} and i am {props.age}  years old! </p>
  <p>{props.children}</p>
  <input type="text" onChange = {props.changed} value={props.name} />
  </div>
)

}

export default Radium(Person);
