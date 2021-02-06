import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

export default createStore(
  () => {
    return {
      initialCommit: []
    }
  },
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  ))