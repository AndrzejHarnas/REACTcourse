import React from 'react';
import classes from './Modal.module.css';


const modal = (props) => (
  <div className={classes.Modal}
  style={{
      transform: props.show ? 'translatrY(0)' : 'transleteY(-100vh)',
      opacity: props.show ? '1' : '0'
  }
} >
    {props.children}
  </div>
);

export default  modal;
