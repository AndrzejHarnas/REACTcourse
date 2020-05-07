import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import *as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 10" clicked={() => this.props.onAdditionCounter()} />
                <CounterControl label="Subtract 15" clicked={() => this.props.onSubstractionCounter()}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}> Store Result </button>
                <ul>
                {this.props.storedResults.map(storedResult => (
                  <li key={storedResult.id} onClick= {() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value} </li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.contr.counter,
    storedResults: state.resr.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAdditionCounter: () => dispatch(actionCreators.add(10)),
    onSubstractionCounter: () => dispatch(actionCreators.substract(15)),
    onStoreResult: (result) => dispatch(actionCreators.storedResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
