import * as actionTypes from './actionTypes';


export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: resElId
  }
};

export const saveResult = (res) => {
  //const updatedResult = res*2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storedResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().contr.counter;
      console.log(oldCounter);
      dispatch(saveResult(res));
    },2000);
  }


};
