import fetchData from '../../helpers/fetchData'

const fetchProducts = (payload) => {
  return {
    type: 'FETCH_PRODUCTS',
    payload
  }
}

const fetchProduct = (payload) => {
  return {
    type: 'FETCH_PRODUCT',
    payload
  }
}

const setError = payload => {
  return {
    type: 'SET_IS_ERROR',
    payload
  }
}

export const setLoading = payload => {
  return {
    type: 'SET_IS_LOADING',
    payload
  }
}

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    dispatch(fetchProducts([]))
    fetchData('/products')
      .then(res => res.json())
      .then(data => dispatch(fetchProducts(data)))
      .catch(err => dispatch(setError((err))))
      .finally(_ => dispatch(setLoading(false)))
  }
}

export const getProductById = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    dispatch(fetchProduct({}))
    fetchData(`/products/${id}`)
      .then(res => res.json())
      .then(data => dispatch(fetchProducts(data)))
      .catch(err => dispatch(setError((err))))
      .finally(_ => dispatch(setLoading(false)))
  }
}
