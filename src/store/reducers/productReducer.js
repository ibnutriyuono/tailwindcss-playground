const initialState = {
  products: [],
  isLoading: false,
  isError: null,
  product: {}
}


export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: payload
      }
    case 'SET_IS_ERROR':
      return {
        ...state,
        isError: payload
      }
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: payload
      }
    case 'FETCH_PRODUCT':
      return {
        ...state,
        product: payload
      }
    default:
      return state
  }
}