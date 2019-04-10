import { combineReducers } from 'redux'

import products from './productReducer'
import filter from './filterReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
  products,
  filter,
  cart
})

export default rootReducer
