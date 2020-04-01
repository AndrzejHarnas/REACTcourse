import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxho.js';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
  <Backdrop show={props.show} clicked={props.modalClosed}/>
  <div className={classes.Modal}
  style={{
      transform: props.show ? 'translatrY(0)' : 'transleteY(-100vh)',
      opacity: props.show ? '1' : '0'
  }
} >
    {props.children}
  </div>
  </Aux>
);

export default  modal;
