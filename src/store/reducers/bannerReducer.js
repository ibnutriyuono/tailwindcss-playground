const initialState = {
  banners : []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_BANNERS':
      return {
        ...state,
        banners: payload
      }
    default:
      return state
  }
}