import fetchData from '../../helpers/fetchData'

const fetchBanners = (payload) => {
  return {
    type: 'FETCH_BANNERS',
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


export const getBanners = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    dispatch(fetchBanners([]))
    fetchData('/banners')
      .then(res => res.json())
      .then(data => dispatch(fetchBanners(data)))
      .catch(err => dispatch(setError((err))))
      .finally(_ => dispatch(setLoading(false)))
  }
}