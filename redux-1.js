const redux = require('redux')

const initialState = {
  counter: 10
}
//reducers
const red = (state=initialState, action) => {
  console.log(state, action)
  if (action.type === 'INC') {
    return {
      counter: state.counter+1
    }
  }
  return state;
}

//store
const store = redux.createStore(red);

//subscribe
store.subscribe(()=>{
  console.log('SUBSCRIBE 1', store.getState())
})

//dispatch
store.dispatch({type:'INC'})
store.dispatch({type:'INC'})
store.dispatch({type:'INC'})
