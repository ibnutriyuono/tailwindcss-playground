const initialState = {
  isLoggedIn: false
}


export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: payload
      }
    default:
      return state
  }
}