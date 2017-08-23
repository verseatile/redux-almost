import { combineReducers } from 'redux'
import TodosReducer from './reducer_todos'
import AddUserReducer from './reducer_todos_filter'

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
  todos: TodosReducer,
  addEm: AddUserReducer,
  init: []
})

export default rootReducer
