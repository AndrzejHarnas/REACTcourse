import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) =>{

  const toggleBtnRef = useRef(null);




  useEffect(() => {
    console.log('[cockpit.js] useEffect');
//         setTimeout(() => {
//          alert('Saved data to cloud!')
//        }, 1000);
  toggleBtnRef.current.click();
        return () => {
          console.log('[Cockpit.js cleanup work in useEffetct]')
        };
  }, [] );

useEffect(()=> {
    console.log('[cockpit.js] 2nd useEffect');
    return () => {
        console.log('[Cockpit.js cleanup work in 2nd useEffetct]')
    }
});


  const assignedClasses = [];
  let btnClass = '';


  if(props.showPersons) {
      btnClass = classes.Red;
  }

  if(props.personsLength <=2) {
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <=1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join(' ')}> This is really working </p>
    <button
     className={btnClass}
     onClick={props.clicked}
    ref={toggleBtnRef}
     > Show or Hide Persons

    </button>
    </div>
  );
}

export default React.memo(Cockpit);
