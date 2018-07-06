const redux = require('redux'); //import redux from 'redux'
//reducers
//current state of the store & Action
const red = (state = {counter: 0}, action) => {
  console.log('Reducers', state, action)
  if(action.type === 'INC') {
    return {
      counter: state.counter+action.data
    }
  }
  return state;
}

//store - centeral store
const store = redux.createStore(red);

//subscriptions
const sub = () => {
  console.log('SUB', store.getState())
}

store.subscribe(sub)

console.log(store.getState()) //getting the store data

//dispatch events
store.dispatch({type:'INC', data: 1})
store.dispatch({type:'INC', data: 5})
store.dispatch({type:'INC', data: 2})
console.log(store.getState()) //getting the store data
