import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import bannerReducer from './bannerReducer'

export default combineReducers({
  user: userReducer,
  product: productReducer,
  banner: bannerReducer
})