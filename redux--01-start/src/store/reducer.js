import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {

    //     if(action.type === 'INCREMENT') {
    // return {
    //   counter: state.counter + 1
    // }


switch(action.type){
  case actionTypes.INCREMENT:
  return {
    ...state,
    counter: state.counter + 1
  };

  case actionTypes.DECREMENT:
  return {
      ...state,
    counter: state.counter - 1
  }

  case actionTypes.ADD:
  return {
      ...state,
    counter: state.counter + action.val
  }

  case actionTypes.SUB:
  return {
      ...state,
    counter: state.counter - action.val
  }

  case actionTypes.STORE_RESULT:
  return {
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter})
  }
  case actionTypes.DELETE_RESULT:

  const updatedArray = state.results.filter((result) => result.id !== action.id)
  return {
    ...state,
    results: updatedArray

  }

  default:
  console.log('nothing');






  }
  return state;
};

export default reducer;
