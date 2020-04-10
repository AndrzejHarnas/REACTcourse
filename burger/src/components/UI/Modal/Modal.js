import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxho.js';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
sholudComponentUpdate(nextProps, nextState) {
  return nextProps.show !== this.props.show

}

componentDidUpdate(prevProps) {
  if(prevProps.show !== this.props.show) {
    console.log('[modal] did update')
  }
}

render () {
  return(
    <Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div className={classes.Modal}
    style={{
        transform: this.props.show ? 'translatrY(0)' : 'transleteY(-100vh)',
        opacity: this.props.show ? '1' : '0'
    }
  } >
      {  this.props.show ? this.props.children : null }

    </div>
    </Aux>
  );
}

}



export default  Modal;
