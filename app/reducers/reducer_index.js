import { combineReducers } from 'redux'
import AddUserReducer from './reducer_todos'

/**
 * This file combines multiple reducers.
 * 
 * Each object below represents part of the state
 * 
 * LITERALLY THO. THE PROPERTIES INSIDE OF ROOTREDUCER ARE
 * PART OF THE STATE
 * 
 * aka state.prop1
 */
const rootReducer = combineReducers({
  todos: AddUserReducer,
  init: []
})

export default rootReducer
