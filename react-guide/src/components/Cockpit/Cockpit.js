import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) =>{
  useEffect(() => {
    console.log('[cockpit.js] useEffect');

    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000);
  }, [] )



  const assignedClasses = [];
  let btnClass = '';


  if(props.showPersons) {
      btnClass = classes.Red;
  }

  if(props.persons.length <=2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <=1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join(' ')}> This is really working </p>
    <button className={btnClass}
     onClick={props.clicked}> Show or Hide Persons
    </button>
    </div>
  );
}

export default Cockpit;