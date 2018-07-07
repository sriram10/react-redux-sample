const initialState = {
  counter: 0,
  name: 'test',
  email: 'test@test.com'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.data
      }
    default:
      return state;
  }
}

export default reducer