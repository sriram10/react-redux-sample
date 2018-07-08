import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  SUB_COUNTER,
  CHANGE_EMAIL,
  STORE_RESULTS,
  DELETE_RESULTS,
  UPDATE_COUNTER
} from './actionTypes/actionTypes'

const initialState = {
  counter: 100,
  results: []
}


const reducer = (state = initialState, action) => {
  console.log(action, state);
  
  let ctr = state.counter,
    results = [...state.results];
  switch(action.type) {
    case INCREMENT:
      ctr++;
      break;
    case DECREMENT:
      ctr--;
      break;
    case ADD_COUNTER:
      ctr += action.value;
      break;
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.value
      };
    case SUB_COUNTER:
      ctr -= action.value;
      break;
    case STORE_RESULTS:
      results.push(ctr)
      break;
    case DELETE_RESULTS:
      results.splice(action.value, 1)
      break;
    case UPDATE_COUNTER:
      return {
        ...state,
        counter: action.data
      }
    default:
      return state;
  }
  return {
    counter: ctr,
    results
  }
}

export default reducer