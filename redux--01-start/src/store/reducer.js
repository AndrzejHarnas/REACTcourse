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
  case 'INCREMENT':
  return {
    ...state,
    counter: state.counter + 1
  };

  case 'DECREMENT':
  return {
      ...state,
    counter: state.counter - 1
  }

  case 'ADD':
  return {
      ...state,
    counter: state.counter + action.val
  }

  case 'SUB':
  return {
      ...state,
    counter: state.counter - action.val
  }

  case 'STORE_RESULT':
  return {
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter})
  }

  default:
  console.log('nothing');






  }
  return state;
};

export default reducer;
