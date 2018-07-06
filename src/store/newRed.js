const red = (state = {email:null}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        email: action.email
      }
    default:
      return state
  }
}

export default red