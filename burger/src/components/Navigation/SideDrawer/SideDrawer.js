import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxho';


const sideDrawer = (props) => {
let attacchedClasses = [classes.sideDrawer,classes.Close]
if(props.open) {
  attacchedClasses = [classes.sideDrawer, classes.Open]
}
  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attacchedClasses.join(' ')}>
      <div className={classes.Logo} >
      <Logo />
      </div>
        <nav>
          <NavigationItems />
        </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
