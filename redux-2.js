const redux = require('redux') // import {createStore} from 'redux'

//reducers
const red = (state = {}, action) => {
  console.log('REDUCER: ', state, action)

  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter+1
      }  
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.data
      }  
    default:
      return {
        counter: 0,
        name: 'test',
        email: 'test@test.com'
      }
  }
}

//store
const store = redux.createStore(red)
console.log('INITIAL STORE: ', store.getState())

// subscriptions events
store.subscribe(() => {
  console.log('SUB 1:', store.getState())
})


//dispatch events
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'UPDATE_NAME', data: 'new NAME'})

console.log('RESULT', store.getState())