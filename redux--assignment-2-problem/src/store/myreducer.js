import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const myreducer = (state=initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_PERSON:
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
    }
    return {
      ...state,
      persons: state.persons.concat(newPerson)
    }

    case actionTypes.DELETE_PERSON:
    const updatedPerson = state.persons.filter(person => person.id !== action.personId)
    return {
      ...state,
      persons: updatedPerson
    }


    default:
    console.log('it is not working!!!');
  }

return state;

}

export default myreducer;
