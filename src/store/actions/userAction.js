const setUserAuth = (payload) => {
  return {
    type: 'SET_IS_LOGGED_IN',
    payload
  }
}

export const handleUserAuth = (authStatus) => {
  return (dispatch) => {
    dispatch(setUserAuth(authStatus))
  }
}