import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'

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
                <button onClick={this.props.onStoreResult}> Store Result </button>
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
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAdditionCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
    onSubstractionCounter: () => dispatch({type: actionTypes.SUB, val: 15}),
    onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id }),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
