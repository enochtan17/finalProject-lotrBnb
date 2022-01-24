import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import session from './session'
import listingReducer from './listings'
import singleListingReducer from './singlelisting'
import reviewReducer from './reviews'
import addListingFormReducer from './showAddListingForm'
import editListingFormReducer from './showEditListingForm'

const rootReducer = combineReducers({
  session,
  listingReducer,
  singleListingReducer,
  reviewReducer,
  addListingFormReducer,
  editListingFormReducer
})


let enhancer

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk)
} else {
  const logger = require('redux-logger').default
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore
