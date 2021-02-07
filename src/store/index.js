import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combinedReducers from './reducers'

export default createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))