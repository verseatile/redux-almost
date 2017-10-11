import { combineReducers } from 'redux'
import MessagesReducer from './reducer_messages'

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
  messages: MessagesReducer,
  init: []
})

export default rootReducer
