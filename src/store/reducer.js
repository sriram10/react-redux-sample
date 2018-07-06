import {UPDATE_COUNTER} from './actions'

const initialState = {
  counter: 100,
  results: []
}


const reducer = (state = initialState, action) => {
  console.log(action, state);
  
  let ctr = state.counter,
    results = [...state.results];
  switch(action.type) {
    case 'INCREMENT':
      ctr++;
      break;
    case 'DECREMENT':
      ctr--;
      break;
    case 'ADD':
      ctr += action.value;
      break;
    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.value
      };
    case 'SUBTRACT':
      ctr -= action.value;
      break;
    case 'STORE_RESULT':
      results.push(ctr)
      break;
    case 'DELETE_RESULT':
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